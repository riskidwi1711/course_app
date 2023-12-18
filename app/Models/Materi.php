<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'file_id', 'paket_id'];

    public function file()
    {
        return $this->belongsTo(File::class, 'file_id');
    }
}
