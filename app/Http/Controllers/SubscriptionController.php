<?php

namespace App\Http\Controllers;

use App\Models\PaketProduct;
use App\Models\Subscription;
use App\Models\User;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function index()
    {
        $subscriptions = Subscription::all();
        return view('subscriptions.index', compact('subscriptions'));
    }

    public function create()
    {
        $users = User::all();
        $pakets = PaketProduct::all();
        return view('subscriptions.create', compact('users', 'pakets'));
    }

    public function store(Request $request)
    {
        $all = $request->all();
        $all[] = '';
        
        Subscription::create($all);
    }
}
