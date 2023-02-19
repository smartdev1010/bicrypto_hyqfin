<?php

namespace App\Models\P2P;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class P2PMethod extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':p2p_methods', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getCacheById($id)
    {
        return Cache::remember($this->cacheKey($this) . ':p2p_methods', now()->addHours(4), function () use ($id) {
            return self::where('id', $id)->first();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':p2p_methods');
        return self::getCache();
    }
    protected $table = "p2p_methods";
}
