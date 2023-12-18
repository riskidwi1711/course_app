<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'quiz_type', 'description', 'user_id', 'paket_id', 'points_per_question', 'total_time'
    ];

    protected static function booted()
    {
        static::addGlobalScope('withQuestions', function ($builder) {
            $builder->with(['questions', 'user']);
        });
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y');
    }

    public function paket_products()
    {
        return $this->belongsTo(PaketProduct::class, 'paket_id');
    }

    public function paket()
    {
        return $this->belongsTo(PaketProduct::class, 'paket_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
