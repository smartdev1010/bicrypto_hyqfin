<?php

namespace App\Models\Ico;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class ICO extends Model
{
    use HasFactory;
    use CacheKeyTrait;
    
    protected $table = 'icos';

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':all_ico', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':all_ico');
        return self::getCache();
    }

    public function getIcoCache()
    {
        return Cache::remember($this->cacheKey($this) . ':icos', now()->addHours(4), function () {
            return self::with(['logs'])->get();
        });
    }

    public function logs()
    {
        return $this->hasMany(IcoLogs::class);
    }
}
