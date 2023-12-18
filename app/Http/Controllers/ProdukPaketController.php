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
            "paket_produk" => PaketProduct::with('features')->get(),
            "paket" => Paket::all(),
            "kategori" => PaketProductCategory::all()
        ];
        return Inertia::render('Master/PaketProduk', $data);
    }

    public function store(Request $request)
    {


        $title = $request->title;
        $paket_id = $request->paket_id;
        $kategori_id = $request->kategori_id;
        $price = $request->base_price;
        $discount = $request->discount_price;
        $isActive = $request->is_active;

        if ($request->has('page_type')) {
            if ($request->page_type == 'paket_skd') {
                $paket_id = Paket::where('slug', 'paket_skd')->first()->id;
                $kategori_id = 1;
            } elseif ($request->page_type == 'paket_skb') {
                $paket_id = Paket::where('slug', 'paket_skb')->first()->id;
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

        return Inertia::render('Master/DetailPaket', $data);
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
