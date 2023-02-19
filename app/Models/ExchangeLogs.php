<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class ExchangeLogs extends Model
{
    use HasFactory;
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':exchange_log', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':exchange_log');
        return self::getCache();
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function crypto()
    {
        return $this->belongsTo(Wallet::class, 'crypto');
    }
    public function to()
    {
        return $this->belongsTo(Wallet::class, 'to');
    }
}
