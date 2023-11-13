<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaketProduct extends Model
{
    use HasFactory;
    protected $fillable = ['paket_id', 'category_id', 'title', 'base_price', 'discount_price', 'is_active'];

    protected $appends = ['paket_name', 'kategori_name'];
    protected function serializeDate($date)
    {
        return $date->format('Y-m-d');
    }

    public function getPaketNameAttribute()
    {
        return $this->paket->package_name;
    }

    public function getKategoriNameAttribute()
    {
        return $this->kategori->title;
    }


    public function paket()
    {
        return $this->belongsTo(Paket::class);
    }

    public function kategori()
    {
        return $this->belongsTo(PaketProductCategory::class, 'category_id');
    }

    public function features()
    {
        return $this->hasMany(PaketProductFeature::class);
    }
}
