<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserQuizResult extends Model
{
    use HasFactory;

    protected $table = 'user_quiz_results';

    protected $fillable = [
        'user_id',
        'quiz_id',
        'score',
        'start_time'
    ];

    protected function serializeDate($date)
    {
        return $date->format('Y-m-d H:i');
    }

    protected $dates = [
        'timestamp',
        'start_time',
        'created_at',
        'updated_at',
    ];

    // Relationship with the User model
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relationship with the Quiz model
    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }

    public function userAnswers()
    {
        return $this->hasMany(UserAnswer::class, 'result_id');
    }
}
