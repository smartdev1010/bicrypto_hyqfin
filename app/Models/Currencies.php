<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Currencies extends Model
{
    use HasFactory;
    use CacheKeyTrait;
    

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':currencies');
        return self::getCache();
    }

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':currencies', now()->addHours(4), function () {
            return self::where('status', 1)->first();
        });
    }
}
