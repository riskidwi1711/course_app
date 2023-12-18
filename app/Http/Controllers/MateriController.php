<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Materi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MateriController extends Controller
{
    public function store(Request $request)
    {
        // Simpan file ke server dan catat informasi file di database
        foreach ($request->file() as $uploadedFile) {
            $path = $uploadedFile->store('uploads', 'public'); // Sesuaikan dengan folder penyimpanan yang diinginkan

            // Simpan metadata file (contoh: nama pengguna yang mengunggah)
            $metadata = [
                'uploaded_by' => auth()->user()->name,
                'size' => $uploadedFile->getSize(),
                'type' => $uploadedFile->getMimeType(),
                'original_name' => $uploadedFile->getClientOriginalName()
            ];

            $file = File::create([
                'nama_file' => $uploadedFile->getClientOriginalName(),
                'path' => $path,
                'metadata' => $metadata,
            ]);

            Materi::create([
                'title' => str_replace('.pdf', '', $uploadedFile->getClientOriginalName()),
                'paket_id' => $request->paket_id,
                'file_id' => $file->id
            ]);
        }
    }

    public function destroy($id)
    {
        $materi = Materi::find($id);
        $materi->delete();
    }

    public function detail($id)
    {
        $materi_id = $id;
        $materi = Materi::with('file')->where('id', $materi_id)->get()->first();
        $data = [
            'detail' => $materi,
        ];
        $data['pageIdentity'] = [
            "title" => 'Detail ' . str_replace('.pdf', '', $materi->title),
            "icon" => 'uil uil-package'
        ];

        return Inertia::render('Materi/MateriDetail', $data);
    }
}
