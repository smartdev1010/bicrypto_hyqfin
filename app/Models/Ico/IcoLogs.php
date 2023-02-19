<?php

namespace App\Models\Ico;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class IcoLogs extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':ico_logs', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getCached($id)
    {
        return Cache::remember($this->cacheKey($this) . ':ico_logs' . $id, now()->addHours(4), function () use ($id) {
            return self::with(['ico'])->where('user_id', $id)->latest()->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':ico_logs');
        return self::getCache();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function ico()
    {
        return $this->belongsTo(ICO::class);
    }
}
