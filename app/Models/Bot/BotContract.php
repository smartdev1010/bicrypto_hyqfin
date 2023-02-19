<?php

namespace App\Models\Bot;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class BotContract extends Model
{
    use HasFactory;
    use CacheKeyTrait;

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':bot_contracts', now()->addHours(4), function () {
            return self::latest()->get();
        });
    }
    public function getCached($id)
    {
        return Cache::remember($this->cacheKey($this) . ':bot_contracts' . $id, now()->addHours(4), function () use ($id) {
            return self::where('user_id', $id)->latest()->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':bot_contracts');
        return self::getCache();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function bot()
    {
        return $this->belongsTo(Bot::class);
    }
}
