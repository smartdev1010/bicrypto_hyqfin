<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class PracticeLog extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':practice_log', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getCacheByUser($id)
    {
        return Cache::remember($this->cacheKey($this) . ':practice_log_user', now()->addHours(4), function () use ($id) {
            return self::where('user_id', $id)->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':practice_log_user');
        Cache::forget($this->cacheKey($this) . ':practice_log');
        return self::getCache();
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
