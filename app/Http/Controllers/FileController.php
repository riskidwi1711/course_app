<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function upload(Request $request)
    {
        // Validasi request
        $request->validate([
            'files.*' => 'required|mimes:pdf,docx,doc,xls,xlsx|max:10240', // Sesuaikan dengan format file yang diizinkan dan ukuran maksimum
        ]);

        // Simpan file ke server dan catat informasi file di database
        foreach ($request->file('files') as $uploadedFile) {
            $path = $uploadedFile->store('uploads'); // Sesuaikan dengan folder penyimpanan yang diinginkan

            // Simpan metadata file (contoh: nama pengguna yang mengunggah)
            $metadata = [
                'uploaded_by' => auth()->user()->name,
                'size' => $uploadedFile->getSize(),
                'type' => $uploadedFile->getMimeType()
            ];

            File::create([
                'nama_file' => $uploadedFile->getClientOriginalName(),
                'path' => $path,
                'metadata' => $metadata,
            ]);
        }

        return redirect()->back()->with('success', 'File berhasil diunggah.');
    }
}
