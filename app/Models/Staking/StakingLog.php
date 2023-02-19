<?php

namespace App\Models\Staking;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class StakingLog extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':staking_log', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getCached($user, $coin)
    {
        return Cache::remember($this->cacheKey($this) . ':staking_log_cached', now()->addHours(4), function () use ($user, $coin) {
            return self::where('user_id', $user)->where('coin_id', $coin)->where('status', '>', 0)->where('status', '<', 3)->latest()->first();
        });
    }
    public function getCachedStaking($user)
    {
        return Cache::remember($this->cacheKey($this) . ':staking_log_cached_staking', now()->addHours(4), function () use ($user) {
            return self::where('user_id', $user)->latest()->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':staking_log');
        Cache::forget($this->cacheKey($this) . ':staking_log_cached');
        Cache::forget($this->cacheKey($this) . ':staking_log_cached_staking');
        return self::getCache();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function coin()
    {
        return $this->belongsTo(StakingCurrency::class, 'coin_id');
    }
}
