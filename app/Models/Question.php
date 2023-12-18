<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'question_text', 'question_type', 'correct_answer', 'time_in_seconds', 'image_link','quiz_id'
    ];

    protected static function booted()
    {
        static::addGlobalScope('withOptions', function ($builder) {
            $builder->with(['options','explanation']);
        });
    }

    public function options()
    {
        return $this->hasMany(Option::class);
    }

    public function explanation()
    {
        return $this->hasOne(Explanation::class);
    }
}
