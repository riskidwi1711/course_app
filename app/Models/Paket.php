<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paket extends Model
{
    use HasFactory;
    protected $fillable = ['package_name', 'is_categorized', 'is_active', 'slug', 'url'];

    protected function serializeDate($date)
    {
        return $date->format('Y-m-d H:i');
    }

    public function paket_produk()
    {
        return $this->hasMany(PaketProduct::class);
    }

    public function subscription()
    {
        return $this->belongsTo(Subscription::class);
    }
}
