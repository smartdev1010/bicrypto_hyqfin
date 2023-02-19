<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class CoinbaseCurrencies extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':coinbase_currencies', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getEnabled()
    {
        return Cache::remember($this->cacheKey($this) . ':coinbase_currencies_enabled', now()->addHours(4), function () {
            return self::where('status', 1)->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':coinbase_currencies');
        Cache::forget($this->cacheKey($this) . ':coinbase_currencies_enabled');
        return self::getCache();
    }
}
