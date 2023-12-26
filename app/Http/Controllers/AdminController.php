<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Models\Transaction;
use App\Models\Voucher;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function __construct()
    {
    }

    public function index()
    {
        $data = [
            'pageIdentity' => [
                "title" => 'Dashboard',
                "icon" => 'uil uil-home-alt'
            ]
        ];

        return Inertia::render('Admin/Dashboard/Dashboard',  $data);
    }

    public function transactions()
    {
        $data = [
            'transactions' => Transaction::with(['user'])
            ->leftJoin('vouchers', 'transactions.voucher_code', '=', 'vouchers.code')
            ->orderBy('created_at', 'desc')->get(['transactions.*', 'vouchers.discount'])
        ];

        $data['pageIdentity'] = [
            "title" => 'Transaksi',
            "icon" => 'uil uil-money-withdraw'
        ];

        return Inertia::render('Admin/Finance/Transactions/Transactions', $data);
    }
}
