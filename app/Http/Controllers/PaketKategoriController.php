<?php

namespace App\Http\Controllers;

use App\Models\PaketProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaketKategoriController extends Controller
{
    public function index()
    {
        $data = [
            'paket_category' => PaketProductCategory::all()
        ];
        return Inertia::render('Master/PaketCategory', $data);
    }

    public function store(Request $request)
    {
        $title = $request->title;
        $description = $request->description;

        PaketProductCategory::create(['title' => $title, 'description' => $description]);

        return to_route('master.paket_kategori');
    }

    public function paket_produk()
    {
        return $this->hasMany(PaketProduct::class);
    }
}
