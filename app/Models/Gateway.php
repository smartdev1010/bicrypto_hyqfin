<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Gateway extends Model
{
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':gateway', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':gateway');
        return self::getCache();
    }
    protected $guarded = ['id'];
    protected $fillable = [
        'name', 'code', 'status', 'alias', 'image'
    ];
    protected $casts = ['status' => 'boolean', 'code' => 'string', 'extra' => 'object', 'input_form' => 'object'];

    public function currencies()
    {
        return $this->hasMany(GatewayCurrency::class, 'method_code', 'code');
    }

    public function single_currency()
    {
        return $this->hasOne(GatewayCurrency::class, 'method_code', 'code')->latest();
    }

    public function scopeCrypto()
    {
        return $this->crypto == 1 ? 'crypto' : 'fiat';
    }

    public function scopeAutomatic()
    {
        return $this->where('code', '<', 1000);
    }

    public function scopeManual()
    {
        return $this->where('code', '>=', 1000);
    }
}
