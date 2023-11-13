<?php

namespace App\Http\Controllers;

use App\Models\Paket;
use App\Models\PaketProduct;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SoalController extends Controller
{

    public function index(Request $request)
    {
        $data = [
            'paket' => Paket::all(),
            'paket_produk' => PaketProduct::all()
        ];
        $data['pageIdentity'] = [
            "title" => 'Buat soal',
            "icon" => 'uil uil-file-landscape-alt'
        ];
        return Inertia::render('Soal/Index', $data);
    }

    public function create(){
        $data['pageIdentity'] = [
            "title" => 'Buat soal',
            "icon" => 'uil uil-file-landscape-alt'
        ];
        return Inertia::render('Soal/SoalCreate', $data);
    }

}
