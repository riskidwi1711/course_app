<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {

        $data = [
            'pageIdentity' => [
                "title" => 'Dashboard',
                "icon" => 'uil uil-home-alt'
            ]
        ];

        return Inertia::render('Dashboard',  $data);
    }
}
