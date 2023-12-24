<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Models\Transaction;
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
        $amount = $request->amount;

        $all = $request->all();
        $all['user_id'] = auth()->user()->id;
        $all['invoice_no'] = $ref_id;
        $all['transaction_date'] = Carbon::now();
        $all['product'] = $all['paket_id'];

        $payment = $this->payment->create_invoice(amount: $amount, ref_id: $ref_id);
        $all['checkout_link'] = $payment->invoice_url;

        Transaction::create($all);

        return redirect()->back()->with('response_data', $payment);
    }
}
