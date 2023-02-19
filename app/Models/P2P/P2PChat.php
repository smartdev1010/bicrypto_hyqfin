<?php

namespace App\Models\P2P;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class P2PChat extends Model
{
    use HasFactory;
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':p2p_chats', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':p2p_chats');
        return self::getCache();
    }
    protected $table = "p2p_chats";

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function peer()
    {
        return $this->belongsTo(User::class, 'peer_id');
    }
}
