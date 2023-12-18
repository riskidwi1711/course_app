<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = ['product_id', 'user_id', 'price', 'quantity', 'total'];
    // Tambahkan relasi atau metode lainnya di sini

    public function product()
    {
        return $this->belongsTo(PaketProduct::class, 'product_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
