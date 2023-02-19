<?php

namespace App\Models\P2P;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class P2POrder extends Model
{
    use HasFactory;
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':p2p_orders', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':p2p_orders');
        return self::getCache();
    }

    protected $table = "p2p_orders";

    public function ad()
    {
        return $this->belongsTo(P2PAds::class, 'ad_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function peer()
    {
        return $this->belongsTo(User::class, 'peer_id');
    }

    public function method()
    {
        return $this->belongsTo(P2PMethod::class, 'method_id');
    }
}
