<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::all();

        return view('transactions.index', compact('transactions'));
    }

    public function create()
    {
        return view('transactions.create');
    }

    public function store(Request $request)
    {
        $all = $request->all();
        $all['user_id'] = auth()->user()->id;
        $all['invoice_no'] = Transaction::generateInvoiceNumber();
        $all['transaction_date'] = Carbon::now();
        $start_date = Carbon::now();

        Subscription::create([
            'start_date' => $start_date,
            'end_date' => $start_date->copy()->addYear(),
            'paket_id' => $request->paket_id,
            'user_id' => auth()->user()->id
        ]);


        Transaction::create($all);
    }
}
