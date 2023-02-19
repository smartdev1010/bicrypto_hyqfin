<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Watchlist extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':watchlists', now()->addHours(4), function () {
            return $this->get();
        });
    }
    public function getCached($id)
    {
        return Cache::remember($this->cacheKey($this) . ':watchlist', now()->addHours(4), function () use ($id) {
            return $this->where('user_id', $id)->get()->map(function ($fav) {
                $fav->symbol = $fav->currency . '/' . $fav->pair;
                return $fav;
            });
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':watchlist');
        Cache::forget($this->cacheKey($this) . ':watchlists');
        return self::getCache();
    }
}
