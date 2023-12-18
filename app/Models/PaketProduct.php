<?php

namespace App\Models;

use App\Http\Controllers\QuizController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaketProduct extends Model
{
    use HasFactory;
    protected $fillable = ['paket_id', 'category_id', 'title', 'base_price', 'discount_price', 'is_active'];

    protected $appends = ['paket_name', 'kategori_name', 'reduced_price', 'feature'];

    protected function serializeDate($date)
    {
        return $date->format('Y-m-d');
    }

    public function getPaketNameAttribute()
    {
        return $this->paket->package_name;
    }

    public function getReducedPriceAttribute()
    {
        return $this->base_price - (($this->discount_price * $this->base_price) / 100);
    }

    public function getKategoriNameAttribute()
    {
        return $this->kategori->title;
    }

    public function getFeatureAttribute()
    {
        $data = [
            "soal_latihan" => Quiz::where('paket_id', $this->id)->where('quiz_type', 'soal latihan')->count(),
            "soal_tryout" => Quiz::where('paket_id', $this->id)->where('quiz_type', 'tryout')->count(),
            "materi" => Materi::where('paket_id', $this->id)->count(),
            "video" => YoutubeVideo::where('paket_id', $this->id)->count()
        ];
        return $data;
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

    public function quiz()
    {
        return $this->hasMany(Quiz::class, 'paket_id');
    }

    public function videos()
    {
        return $this->hasMany(YoutubeVideo::class, 'paket_id');
    }

    public function materis()
    {
        return $this->hasMany(Materi::class, 'paket_id');
    }
}
