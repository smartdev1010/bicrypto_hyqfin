<?php

namespace App\Models\Staking;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class StakingCurrency extends Model
{
    use HasFactory;
    use CacheKeyTrait;

    protected $fillable = [
        'title',
        'symbol',
        'network',
        'period',
        'profit',
        'amount',
        'min_stake',
        'max_stake',
        'staked',
        'apr',
        'profit_unit',
        'daily_profit',
        'status',
        'method',
        'price',
        'icon'
    ];

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':staking_currencies', now()->addHours(4), function () {
            return self::latest()->get();
        });
    }

    public function getCacheCurrency($coin)
    {
        return Cache::remember($this->cacheKey($this) . ':staking_currency_' . $coin, now()->addHours(4), function () use ($coin) {
            return self::where('id', $coin)->first();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':staking_currencies');
        return self::getCache();
    }

    public function logs()
    {
        return $this->hasMany(StakingLog::class, 'coin_id');
    }
}
