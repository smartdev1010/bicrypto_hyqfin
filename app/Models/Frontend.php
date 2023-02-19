<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Frontend extends Model
{
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':frontends', now()->addHours(4), function () {
            return self::where('data_keys', 'seo.data')->first();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':frontends');
        return self::getCache();
    }
    protected $guarded = ['id'];

    protected $table = "frontends";
    protected $casts = [
        'data_values' => 'object'
    ];

    public static function scopeGetContent($data_keys)
    {
        return Frontend::where('data_keys', $data_keys);
    }
}
