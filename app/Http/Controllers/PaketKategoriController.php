<?php

namespace App\Http\Controllers;

use App\Models\Paket;
use App\Models\PaketProduct;
use App\Models\PaketProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaketKategoriController extends Controller
{
    public function index()
    {
        $data = [
            'paket_category' => PaketProductCategory::with('paket')->get(),
            'paket' => Paket::all()
        ];

        $data['pageIdentity'] = [
            "title" => 'Kategori Paket',
            "icon" => 'uil uil-database'
        ];


        return Inertia::render('Admin/Master/PaketCategory/PaketCategory', $data);
    }

    public function store(Request $request)
    {
        $id = $request->id;
        $title = $request->title;
        $description = $request->description;
        $paket_id = $request->paket_id;

        PaketProductCategory::updateOrCreate(['id' => $id], ['description' => $description, 'title' => $title, 'paket_id' => $paket_id]);

        return to_route('master.paket_kategori');
    }

    public function destroy($id)
    {
        $paket_id = $id;
        $paket = PaketProductCategory::find($paket_id);
        $paket->delete();

        return to_route('master.paket_kategori');
    }
}
