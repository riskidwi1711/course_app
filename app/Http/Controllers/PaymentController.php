<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;


class PaymentController extends Controller
{
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

    public function callback(){
        dd(request()->all());
    }
}
