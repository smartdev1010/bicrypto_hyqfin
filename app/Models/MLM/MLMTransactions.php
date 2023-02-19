<?php

namespace App\Models\MLM;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class MLMTransactions extends Model
{
    use HasFactory;
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':mlm_transactions', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':mlm_transactions');
        return self::getCache();
    }
    protected $table = "mlm_transactions";

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
