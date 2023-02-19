<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class GatewayCurrency extends Model
{
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':gateway_currencies', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':gateway_currencies');
        return self::getCache();
    }
    protected $casts = ['status' => 'boolean'];
    protected $guarded = ['id'];

    // Relation
    public function method()
    {
        return $this->belongsTo(Gateway::class, 'method_code', 'code');
    }

    public function currencyIdentifier()
    {
        return $this->name ?? $this->method->name . ' ' . $this->currency;
    }

    public function scopeBaseCurrency()
    {
        return $this->method->crypto == 1 ? 'USD' : $this->currency;
    }

    public function scopeBaseSymbol()
    {
        return $this->method->crypto == 1 ? '$' : $this->symbol;
    }

    public function scopeMethodImage()
    {
        return ($this->image) ? getImage(imagePath()['gateway']['path'] . '/' . $this->image, '800x800') : (($this->method->image) ? getImage(imagePath()['gateway']['path'] . '/' . $this->method->image, '800x800') :  asset(imagePath()['image']['default']));
    }
}
