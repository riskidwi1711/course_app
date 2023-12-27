<?php

namespace App\Http\Controllers;

use App\Models\Paket;
use App\Models\PaketProduct;
use App\Models\PaketProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaketController extends Controller
{
    public function index()
    {
        $data = [
            'paket' => Paket::orderBy('created_at', 'desc')->get()
        ];

        $data['pageIdentity'] = [
            "title" => 'Menu Paket',
            "icon" => 'uil uil-database'
        ];

        return Inertia::render('Admin/Master/Paket/Paket', $data);
    }

    public function store(Request $request)
    {
        $package_name = $request->package_name;
        $is_categorized = $request->is_categorized;
        $is_active = $request->is_active;
        $slug = $request->has('slug') ? $request->slug : str_replace(' ', '_', strtolower($package_name));
        $url = 'menu_paket/source/' . $slug;

        $paket = Paket::updateOrCreate(['slug' => $slug], [
            'package_name' => $package_name,
            'is_categorized' => $is_categorized,
            'is_active' => $is_active,
            'slug' => $slug,
            'url' => $url
        ]);

        if ($is_categorized == 'F') {
            PaketProductCategory::create(['description' => $package_name . '-category', 'title' => $package_name . '-category', 'paket_id' => $paket->id]);
        }

        return to_route('master.paket');
    }

    public function destroy($id)
    {
        $paket_id = $id;
        $paket = Paket::find($paket_id);
        $paket->delete();

        return to_route('master.paket');
    }

    public function paketPage($type)
    {
        $data = [
            "page" => $type,
            "data" => []
        ];


        if ($type == 'paket_skd') {
            $paket_id = Paket::where('slug', $type)->first()->id;
            $skd_produk = PaketProduct::with('features')->where('paket_id', $paket_id)->get();
            $paket = Paket::where('id', $paket_id)->first();
            $category = PaketProductCategory::where('paket_id', $paket_id)->get();
            $data['data'] = [
                "table" => $skd_produk,
                "additional" => [
                    "paket" => $paket,
                    "paket_id" => $paket_id,
                    "category" => $category
                ]
            ];
        } elseif ($type == 'paket_skb') {
            $paket_id = Paket::where('slug', $type)->first()->id;
            $skb_produk = PaketProduct::with('features')->where('paket_id', $paket_id)->get();
            $paket = Paket::where('id', $paket_id)->first();
            $category = PaketProductCategory::where('paket_id', $paket_id)->get();
            $data['data'] = [
                "table" => $skb_produk,
                "additional" => [
                    "paket" => $paket,
                    "paket_id" => $paket_id,
                    "category" => $category
                ]
            ];
        } else {
            $paket_id = Paket::where('slug', $type)->first()->id;
            $skb_produk = PaketProduct::with('features')->where('paket_id', $paket_id)->get();
            $paket = Paket::where('id', $paket_id)->first();
            $category = PaketProductCategory::where('paket_id', $paket_id)->get();
            $data['data'] = [
                "table" => $skb_produk,
                "additional" => [
                    "paket" => $paket,
                    "paket_id" => $paket_id,
                    "category" => $category
                ]
            ];
        }

        $data['pageIdentity'] = [
            "title" => str_replace('_', ' ', $type),
            "title_original" => Paket::where('slug', $type)->get()->pluck('package_name')[0],
            "icon" => 'uil uil-database'
        ];


        return Inertia::render('Admin/Master/PaketMenu/PaketMenu', $data);
    }
}
