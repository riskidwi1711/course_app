<?php

namespace App\Http\Controllers;

use App\Events\MyEvent;
use App\Events\NewNotification;
use App\Models\Notification;
use App\Models\Subscription;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;


class PaymentController extends Controller
{
    private $status;
    private $statusText;

    public function __construct()
    {
        $this->status = [
            "PAID" => 2,
            "PENDING" => 0
        ];
        $this->statusText = [
            "PAID" => 'Selamat pembayaran kamu berhasil',
            "PENDING" => 'Pembayaran kamu sedang kami proses, mohon tunggu ya..'
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
        $user_id = null;
        $paket_id = null;

        Transaction::where('invoice_no', $ref_id)->update([
            'status_id' => $this->status[$status]
        ]);


        if ($status == 'PAID') {
            $updatedTransaction = Transaction::where('invoice_no', $ref_id)->first();
            $user_id = $updatedTransaction->user_id;
            $paket_id = $updatedTransaction->product;
            Subscription::updateOrCreate([
                'paket_id' => $updatedTransaction->product,
                'user_id' => $user_id
            ], [
                'start_date' => $start_date,
                'end_date' => $start_date->copy()->addYear()
            ]);
        }

        if ($user_id && $paket_id) {
            Notification::create([
                'user_id' => $user_id,
                'title' => 'Transaksi pembelian paket',
                'content' => $this->statusText[$status],
                'type' => 'transaction'
            ]);

            event(new NewNotification(['title' => 'New notification created', 'action' => ['route' => 'student.show_my_pake_detail', 'param' => $paket_id], 'user_id' => $user_id]));
        }

        return response()->json(request()->all());
    }
}
