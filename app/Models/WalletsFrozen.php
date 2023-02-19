<?php

namespace App\Models;

use App\Traits\CacheKeyTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class WalletsFrozen extends Model
{
    use HasFactory;
    protected $table = "wallets_frozen";
    protected $guarded = ['id'];

    use CacheKeyTrait;

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':all_frozen_wallets', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getCached($id)
    {
        return Cache::remember($this->cacheKey($this) . ':frozen_wallet', now()->addHours(4), function () use ($id) {
            return self::where('user_id', $id)->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':all_frozen_wallets');
        Cache::forget($this->cacheKey($this) . ':frozen_wallet');
        return self::getCache();
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
