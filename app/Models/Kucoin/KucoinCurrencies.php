<?php

namespace App\Models\Kucoin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class KucoinCurrencies extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':kucoin_currencies', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getEnabled()
    {
        return Cache::remember($this->cacheKey($this) . ':kucoin_currencies_enabled', now()->addHours(4), function () {
            return self::where('status', 1)->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':kucoin_currencies');
        Cache::forget($this->cacheKey($this) . ':kucoin_currencies_enabled');
        return self::getCache();
    }
}
