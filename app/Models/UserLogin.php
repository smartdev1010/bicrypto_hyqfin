<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class UserLogin extends Model
{
    protected $guarded = ['id'];
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':user_login', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':user_login');
        return self::getCache();
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
