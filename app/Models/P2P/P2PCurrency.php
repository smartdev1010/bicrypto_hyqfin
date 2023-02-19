<?php

namespace App\Models\P2P;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class P2PCurrency extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':p2p_currencies', now()->addHours(4), function () {
            return self::with(['ads'])->get();
        });
    }
    public function getCached()
    {
        return Cache::remember($this->cacheKey($this) . ':p2p_currencies_enabled', now()->addHours(4), function () {
            return self::with(['ads'])->where('status', 1)->get();
        });
    }
    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':p2p_currencies_enabled');
        Cache::forget($this->cacheKey($this) . ':p2p_currencies');
        return self::getCache();
    }
    protected $table = "p2p_currencies";

    public function ads()
    {
        return $this->hasMany(P2PAds::class, 'currency_id');
    }
}
