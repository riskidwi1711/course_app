<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WebContentController extends Controller
{
    public function index()
    {
        return Inertia::render('Settings/WebContent');
    }
}
