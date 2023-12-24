<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;


class PaymentController extends Controller
{
    private $status;

    public function __construct()
    {
        $this->status = [
            "PAID" => 2
        ];
    }

    public function create_invoice($amount, $ref_id)
    {
        $secret_key = 'Basic ' . config('xendit.key_auth');
        $external_id = Str::random(10);
        $data_request = Http::withHeaders([
            'Authorization' => $secret_key
        ])->post('https://api.xendit.co/v2/invoices', [
            'external_id' => $ref_id,
            'amount' => $amount
        ]);
        $response = $data_request->object();

        return $response;
    }

    public function callback()
    {
        $ref_id = request()->external_id;
        $status = request()->status;
        $start_date = Carbon::now();

        Transaction::where('invoice_no', $ref_id)->update([
            'status_id' => $this->status[$status]
        ]);
        if ($status == 'PAID') {
            $updatedTransaction = Transaction::where('invoice_no', $ref_id)->first();
            Subscription::updateOrCreate([
                'paket_id' => $updatedTransaction->product,
                'user_id' => $updatedTransaction->user_id
            ], [
                'start_date' => $start_date,
                'end_date' => $start_date->copy()->addYear()
            ]);
        }
        return response()->json(request()->all());
    }
}
