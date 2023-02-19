<?php

namespace App\Models\Eco;

use App\Models\User;
use App\Traits\CacheKeyTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class EcoTokens extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    protected $hidden = [
        'account_id',
        'base_pair',
        'holder_address',
        'hash'
    ];

    public function getCachedCurrencies()
    {
        return Cache::remember($this->cacheKey($this) . ':eco_tokens', now()->addHours(4), function () {
            return $this->where('network', getNativeNetwork())->where('status', 1)->select('chain', 'symbol')->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':eco_tokens');
        return self::getCachedCurrencies();
    }

    public function addresses()
    {
        return $this->hasMany(EcoAddresses::class);
    }

    public function fees_account()
    {
        return $this->hasOne(EcoFeesAccount::class, 'symbol', 'symbol');
    }
}
