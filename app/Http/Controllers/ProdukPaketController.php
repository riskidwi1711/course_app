<?php

namespace App\Http\Controllers;

use App\Models\Materi;
use App\Models\Paket;
use App\Models\PaketProduct;
use App\Models\PaketProductCategory;
use App\Models\Quiz;
use App\Models\YoutubeVideo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProdukPaketController extends Controller
{
    public function index()
    {
        $data = [
            "paket_produk" => PaketProduct::with('features')->orderBy('created_at', 'desc')->get(),
            "paket" => Paket::where('is_categorized', 'T')->get(),
            "kategori" => PaketProductCategory::all()
        ];
        return Inertia::render('Admin/Master/PaketProduct/PaketProduct', $data);
    }

    public function store(Request $request)
    {
        $title = $request->title;
        $paket_id = $request->paket_id;
        $kategori_id = $request->category_id;
        $price = $request->base_price;
        $discount = $request->discount_price;
        $isActive = $request->is_active;

        if ($request->paket_id) {
            $paket = Paket::where('id', $paket_id)->first();
            $is_categorized = $paket->is_categorized;

            if($is_categorized == 'F'){
                $paket_category = PaketProductCategory::where('paket_id', $paket_id)->first();
                $kategori_id = $paket_category->id;
            }
        } 

        PaketProduct::updateOrCreate(['id' => $request->id], [
            "paket_id" => $paket_id,
            "category_id" => $kategori_id,
            "base_price" => $price,
            "discount_price" => $discount,
            "is_active" => $isActive,
            "title" => $title
        ]);
    }

    public function detail($id)
    {

        $product_paket_id = $id;
        $product_paket = PaketProduct::find($product_paket_id);
        $quizez = Quiz::with('user')->where('paket_id', $id)->where('quiz_type', 'Soal Latihan')->get();
        $tryouts = Quiz::with('user')->where('paket_id', $id)->where('quiz_type', 'tryout')->get();
        $videos = YoutubeVideo::where('paket_id', $id)->get();
        $materies = Materi::where('paket_id', $id)->get();

        $data = [
            'detail' => $product_paket,
            'quizez' => $quizez,
            'tryouts' => $tryouts,
            "videos" => $videos,
            "materies" => $materies
        ];
        $data['pageIdentity'] = [
            "title" => 'Detail ' . $product_paket->title,
            "icon" => 'uil uil-package'
        ];

        return Inertia::render('Admin/Master/PaketDetail/PaketDetail', $data);
    }

    public function addVideo(Request $request)
    {
        return to_route('master.produk_paket.detail', 13)->with('message', 'success insert');
    }

    public function destroy($id)
    {
        $paket_id = $id;
        $paket = PaketProduct::find($paket_id)->get()->first();
        $paket->delete();

        // return redirect()->back();
    }
}
