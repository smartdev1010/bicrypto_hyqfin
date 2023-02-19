<?php

namespace App\Models;

use App\Traits\CacheKeyTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Wallet extends Model
{
    use CacheKeyTrait;

    public function getCached($id)
    {
        return Cache::remember($this->cacheKey($this) . ':wallets', now()->addHours(4), function () use ($id) {
            return self::where('provider', '!=', 'local')->where('user_id', $id)->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':wallets');
        return self::getCache();
    }
    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
