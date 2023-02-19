<?php

namespace App\Models\Forex;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class ForexLogs extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':forex_logs', now()->addHours(4), function () {
            return self::with(["investment"])->get();
        });
    }
    public function getCached($id)
    {
        return Cache::remember($this->cacheKey($this) . ':forex_logs' . $id, now()->addHours(4), function () use ($id) {
            return self::with(["investment"])->where('user_id', $id)->latest()->get();
        });
    }
    public function getCachedType($id, $type)
    {
        return Cache::remember($this->cacheKey($this) . ':forex_logs_type' . $id . $type, now()->addHours(4), function () use ($id, $type) {
            return self::where('user_id', $id)->where('type', $type)->with(["investment"])->latest()->get();
        });
    }
    public function getCacheLimit($limit = 10, $id)
    {
        return Cache::remember($this->cacheKey($this) . ':forex_logs_limit', now()->addHours(4), function () use ($limit, $id) {
            return self::with(["investment"])->where('user_id', $id)->latest()->limit($limit)->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':forex_logs');
        Cache::forget($this->cacheKey($this) . ':forex_logs_limit');
        return self::getCache();
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function investment()
    {
        return $this->belongsTo(ForexInvestments::class, 'investment_id');
    }
}
