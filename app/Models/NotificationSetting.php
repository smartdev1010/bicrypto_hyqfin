<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class NotificationSetting extends Model
{

    use CacheKeyTrait;
    

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':notification_settings');
        return self::getCache();
    }
    protected $casts = [
        'mail_config' => 'object',
        'sms_config' => 'object',
        'global_shortcodes' => 'object'
    ];

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':notification_settings', now()->addHours(4), function () {
            return self::first();
        });
    }
}
