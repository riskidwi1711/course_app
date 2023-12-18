<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected $appends = ['role', 'current_permissions', 'overview'];

    protected static function booted()
    {
        static::addGlobalScope('withCart', function ($builder) {
            $builder->with('cart');
            $builder->with('subscriptions');
        });
    }

    public function getOverviewAttribute()
    {
        $subscriptions = $this->subscriptions;
        $transactions = $this->transactions->where('status_id', 0)->count();
        $totalSoal = 0;
        $totalTryOut = 0;

        foreach ($subscriptions as $subscription) {
            // Menggunakan eager loading untuk memuat relasi "paket" dan "soals" untuk setiap subscription
            $subscription->load('paket.quiz');

            // Menjumlahkan total soal pada paket
            $totalSoal += $subscription->paket->quiz->count();
            $totalTryOut += $subscription->paket->quiz->where('quiz_type', 'tryout')->count();
        }

        $overview = [
            'total_soal'=>$totalSoal,
            'total_tryout'=>$totalTryOut,
            'total_transaction'=>$transactions,
            'total_try'=> 0,
            'total_paket_skd'=>0,
            'total_paket_skb'=>0,
            'total_paket_ujikom'=>0,
            'total_paket_pppk'=>0
        ];

        return $overview;
    }

    public function getRoleAttribute()
    {
        $roles =  $this->getRoleNames();
        return $roles->first();
    }

    public function getCurrentPermissionsAttribute()
    {
        return $this->getAllPermissions();
    }


    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function cart()
    {
        return $this->hasMany(Cart::class);
    }
}
