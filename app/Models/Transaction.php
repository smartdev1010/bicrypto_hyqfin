<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Transaction extends Model
{
    use HasFactory;
    protected $table = "transactions";

    protected  $guarded = ['id'];
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':transactions', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':transactions');
        return self::getCache();
    }
    protected $fillable = [
        'user_id',
        'currency',
        'amount',
        'charge',
        'post_balance',
        'trx_type',
        'trx',
        'details',
        'txHash',
        'status',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function pendingTransactions()
    {
        return self::getCache()->where('status', 1)->where('created_at', '<', Carbon::NOW()->subMinutes(20));
    }
}
