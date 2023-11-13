<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaketProductFeature extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'paket_produc_id', 'is_active'];

    public function produk(){
        return $this->belongsTo(PaketProduct::class, 'paket_produk_id');
    }
}
