<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAnswer extends Model
{
    use HasFactory;

    protected $table = 'user_answers';

    protected $fillable = [
        'result_id',
        'question_id',
        'selected_answer',
        'is_correct',
        'repeat_answer'
    ];

    protected static function booted()
    {
        static::addGlobalScope('withQuestion', function ($builder) {
            $builder->with(['question']);
        });
    }

    protected $casts = [
        'is_correct' => 'boolean',
    ];

    // Relationship with the UserQuizResult model
    public function result()
    {
        return $this->belongsTo(UserQuizResult::class, 'result_id');
    }

    // Relationship with the Question model
    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }
}
