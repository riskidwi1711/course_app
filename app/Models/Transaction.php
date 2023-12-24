<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'status_id',
        'product',
        'invoice_no',
        'user_id',
        'transaction_date',
        'voucher_code',
        'payment_method',
        'amount',
        'fee',
        'total_amount',
        'checkout_link'
    ];

    protected $casts = [
        'amount' => 'integer',
        'fee' => 'integer',
        'total_amount' => 'integer',
    ];

    protected function serializeDate($date)
    {
        return $date->format('Y-m-d H:i');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function generateInvoiceNumber()
    {
        // Mendapatkan timestamp saat ini
        $timestamp = now()->timestamp;

        // Membuat nomor invoice dengan prefix "inv-" dan timestamp
        $invoiceNumber = 'inv-' . $timestamp;

        return $invoiceNumber;
    }
}
