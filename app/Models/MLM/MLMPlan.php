<?php

namespace App\Models\MLM;

use App\Traits\CacheKeyTrait;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class MLMPlan extends Model
{
    protected $table = 'mlmplans';

    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':mlm_plans', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function plan0()
    {
        return Cache::remember($this->cacheKey($this) . ':mlm_plan_0', now()->addHours(4), function () {
            return self::where('status', 1)->where('rank', 0)->first();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':mlm_plans');
        Cache::forget($this->cacheKey($this) . ':mlm_plan_0');
        return self::getCache();
    }

    public function getPlan($rank)
    {
        return Cache::remember($this->cacheKey($this) . ':mlm_plans', now()->addHours(4), function () use ($rank) {
            return self::where('status', 1)->where('rank', $rank)->first();
        });
    }
}
