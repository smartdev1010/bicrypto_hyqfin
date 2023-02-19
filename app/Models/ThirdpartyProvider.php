<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class ThirdpartyProvider extends Model
{
    use HasFactory;
    use CacheKeyTrait;

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':thirdpart_provider');
        return self::getCache();
    }

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':thirdparty_provider', now()->addHours(4), function () {
            if (self::where('status', 1)->exists()) {
                return self::where('status', 1)->first();
            } else {
                return null;
            }
        });
    }
}
