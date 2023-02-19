<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class SupportAttachment extends Model
{
    use CacheKeyTrait;
    
    protected $guarded = ['id'];
    protected $table = "support_attachments";

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':support_attachments', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':support_attachments');
        return self::getCache();
    }

    public function supportMessage()
    {
        return $this->belongsTo('App\Models\SupportMessage', 'support_message_id');
    }
}
