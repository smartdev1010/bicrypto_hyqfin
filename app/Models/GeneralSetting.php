<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class GeneralSetting extends Model
{

    use CacheKeyTrait;
    

    protected $guarded = ['id'];

    protected $casts = ['mail_config' => 'object', 'limits' => 'array'];

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':general_settings', now()->addHours(4), function () {
            return self::first();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':general_settings');
        return self::getCache();
    }

    public function scopeSitename($query, $page_title)
    {
        $page_title = empty($page_title) ? '' : ' - ' . $page_title;
        return $this->sitename . $page_title;
    }
}
