<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class WalletsTransactions extends Model
{
    use HasFactory;
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':wallet_transactions', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':wallet_transactions');
        return self::getCache();
    }

    protected $fillable = [
        'user_id',
        'symbol',
        'amount',
        'amount_recieved',
        'charge',
        'fees',
        'to',
        'type',
        'chain',
        'status',
        'trx',
        'wallet_type',
        'address',
        'details'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
