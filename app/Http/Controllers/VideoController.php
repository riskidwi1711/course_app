<?php

namespace App\Http\Controllers;

use App\Models\YoutubeVideo;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function store(Request $request)
    {
        YoutubeVideo::create([
            'paket_id' => $request->paket_id,
            'url_video' => $request->url_video
        ]);

        return to_route('master.produk_paket.detail', $request->paket_id);
    }

    public function destroy($id)
    {
        $video = YoutubeVideo::find($id)->first();
        $video->delete();
    }
}
