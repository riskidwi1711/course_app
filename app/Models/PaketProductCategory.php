<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaketProductCategory extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description', 'paket_id'];

    public function paket()
    {
        return $this->belongsTo(Paket::class, 'paket_id');
    }
}
