<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Platform extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':platform');
        return self::getCache();
    }

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':platform', now()->addHours(4), function () {
            $plats = self::get();
            foreach ($plats as $plat) {
                $platforms[$plat->option] = json_decode($plat->settings);
            }
            return arrayToObject($platforms);
        });
    }
}
