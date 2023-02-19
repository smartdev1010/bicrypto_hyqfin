<?php

namespace App\Models\Bot;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Cache;

class Bot extends Model
{
    use HasFactory;
    use CacheKeyTrait;

    protected $casts = ['limits' => 'array'];

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':all_bots', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getEnabled()
    {
        return Cache::remember($this->cacheKey($this) . ':all_bots', now()->addHours(4), function () {
            return self::with(['timing'])->where('status', 1)->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':all_bots');
        return self::getCache();
    }

    public function timing()
    {
        return $this->hasMany(BotTiming::class, 'bot_id');
    }
}
