<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Extension extends Model
{
    use CacheKeyTrait;
    

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':extensions');
        Cache::forget($this->cacheKey($this) . ':extensions_ids');
        return self::getCache();
    }

    protected $guarded = ['id'];

    protected $casts = [
        'shortcode' => 'object',
    ];

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':extensions', now()->addHours(4), function () {
            $exts = [];
            foreach (self::get() as $ext) {
                $exts[$ext->slug] = $ext->status;
            }
            return $exts;
        });
    }

    public function getCacheById()
    {
        return Cache::remember($this->cacheKey($this) . ':extensions_ids', now()->addHours(4), function () {
            $exts = [];
            foreach (self::get() as $ext) {
                $exts[$ext->id] = $ext->status;
            }
            return $exts;
        });
    }

    public function scopeGenerateScript()
    {
        $script = $this->script;
        foreach ($this->shortcode as $key => $item) {
            $script = shortCodeReplacer('{{' . $key . '}}', $item->value, $script);
        }
        return $script;
    }
}
