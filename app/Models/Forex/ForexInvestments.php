<?php

namespace App\Models\Forex;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class ForexInvestments extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':forex_investments', now()->addHours(4), function () {
            return self::latest()->get();
        });
    }
    public function getEnabled()
    {
        return Cache::remember($this->cacheKey($this) . ':forex_investments_enabled', now()->addHours(4), function () {
            return self::where('status', 1)->latest()->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':forex_investments_enabled');
        Cache::forget($this->cacheKey($this) . ':forex_investments');
        self::getCache();
        return self::getEnabled();
    }
}
