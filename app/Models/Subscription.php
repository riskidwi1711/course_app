<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'start_date',
        'end_date',
        'paket_id',
        'user_id',
    ];

    protected function serializeDate($date)
    {
        return $date->format('Y-m-d H:i');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function paket()
    {
        return $this->belongsTo(PaketProduct::class);
    }
}
