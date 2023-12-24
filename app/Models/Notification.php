<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'content', 'user_id', 'type'
    ];

    protected function serializeDate($date)
    {
        return $date->format('Y-m-d H:i');
    }
}
