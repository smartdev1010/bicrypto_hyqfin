<?php

namespace App\Models\P2P;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class P2PAds extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':p2p_ads', now()->addHours(4), function () {
            return self::with(['user'])->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':p2p_ads');
        return self::getCache();
    }
    protected $table = "p2p_ads";

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function orders()
    {
        return $this->hasMany(P2POrder::class, 'ad_id')->orderby('created_at', 'desc');
    }

    public function method($id)
    {
        return $this->hasOne(P2PMethod::class, 'id', $id);
    }

    public function count_ads()
    {
        return $this->user != null ? count($this->where('user_id', $this->user->id)->get()) : 'User not found';
    }

    public function count_orders()
    {
        return $this->orders->count();
    }

    public function currency()
    {
        return $this->belongsTo(P2PCurrency::class);
    }
}
