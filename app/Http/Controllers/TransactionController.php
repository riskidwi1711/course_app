<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Models\Transaction;
use App\Models\Voucher;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    private $payment;

    public function __construct()
    {
        $this->payment = new PaymentController();
    }

    public function index()
    {
        $transactions = Transaction::orderBy('created_at', 'desc')->get();

        return view('transactions.index', compact('transactions'));
    }

    public function create()
    {
        return view('transactions.create');
    }

    public function store(Request $request)
    {
        $ref_id = Transaction::generateInvoiceNumber();
        $voucher_code = $request->voucher_code;

        $voucher = Voucher::where('code', $voucher_code)
            ->where('is_active', true)
            ->first();

        if ($voucher_code) {
            $amount = ($request->total_amount * $voucher->discount) / 100;
        } else {
            $amount = $request->total_amount;
        }


        $all = $request->all();
        $all['user_id'] = auth()->user()->id;
        $all['invoice_no'] = $ref_id;
        $all['transaction_date'] = Carbon::now();
        $all['product'] = $all['paket_id'];
        $all['amount'] = $amount;

        $payment = $this->payment->create_invoice(amount: $amount, ref_id: $ref_id);
        $all['checkout_link'] = $payment->invoice_url;


        Transaction::create($all);

        return redirect()->back()->with('response_data', $payment);
    }

    public function checkVoucher($code)
    {
        $response = [
            "status" => "00",
            "msg" => "success",
            "data" => []
        ];

        $voucher = Voucher::where('code', $code)
            ->where('is_active', true)
            ->first();

        if ($voucher) {
            $response['data'] = $voucher;
        } else {
            $response["status"] = "01";
            $response["msg"] = "failed";
        }

        return redirect()->back()->with('response_data', $response);
    }
}
