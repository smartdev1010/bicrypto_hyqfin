<?php

namespace App\Models\Eco;

use App\Traits\CacheKeyTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class EcoMainnetTokens extends Model
{
    protected $table = 'eco_mainnet_tokens';
    use HasFactory;
    use CacheKeyTrait;


    protected $hidden = [
        'account_id',
        'base_pair',
        'holder_address',
        'hash'
    ];

    public function getCachedCurrencies()
    {
        return Cache::remember($this->cacheKey($this) . ':eco_mainnet_tokens', now()->addHours(4), function () {
            return $this->where('status', 1)->select('chain', 'symbol', 'postfix')->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':eco_mainnet_tokens');
        return self::getCachedCurrencies();
    }

    public function fees_account()
    {
        return EcoFeesAccount::where('chain', $this->chain)->where('symbol', $this->symbol)->first();
    }

    public function fees_account_main()
    {
        return $this->hasOne(EcoFeesAccount::class, 'symbol', 'symbol');
    }
}
