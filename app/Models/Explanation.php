<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Explanation extends Model
{
    use HasFactory;

    protected $fillable = ['question_id', 'explanation_text'];

    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }
}
