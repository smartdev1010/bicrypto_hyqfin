<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class SupportMessage extends Model
{

    protected $guarded = ['id'];
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':support_message', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':support_message');
        return self::getCache();
    }

    public function ticket()
    {
        return $this->belongsTo(SupportTicket::class, 'supportticket_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id');
    }

    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id', 'id');
    }

    public function attachments()
    {
        return $this->hasMany('App\Models\SupportAttachment', 'support_message_id', 'id');
    }
}
