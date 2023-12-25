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


        return Inertia::render('Admin/Master/PaketCategory/PaketCategoryList', $data);
    }

    public function store(Request $request)
    {
        $title = $request->title;
        $description = $request->description;
        $paket_id = $request->paket_id;

        PaketProductCategory::create(['title' => $title, 'description' => $description, 'paket_id'=>$paket_id]);

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
