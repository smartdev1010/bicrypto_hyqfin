<?php

namespace App\Traits;

trait CacheKeyTrait
{
    public function cacheKey($table)
    {
        return $table->where('updated_at', '!=', null)->count() > 0 ? $table->orderBy('updated_at', 'desc')->first()->updated_at->timestamp : now()->dayOfYear;
    }
}
