<?php

namespace App\Models\Forex;

use App\Models\User;
use App\Traits\CacheKeyTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class ForexAccounts extends Model
{
    use HasFactory;
    use CacheKeyTrait;
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getAccount($id)
    {
        return Cache::remember($this->cacheKey($this) . ':forex_account' . $id, now()->addHours(4), function () use ($id) {
            $account = $this->where('user_id', $id)->first();
            for ($i = 1; $i < 6; $i++) {
                $signals[] = ForexSignals::where('id', $account['signal' . $i . '_id'])->first();
            }
            $account->signals = arrayToObject($signals);
            return $account;
        });
    }

    // public function clearCache()
    // {
    //     Cache::forget($this->cacheKey($this) . ':forex_account');
    //     return self::getCache();
    // }


    public function signals()
    {
        $signals = [];
        for ($i = 1; $i < 6; $i++) {
            $signals[] = ForexSignals::where('id', 'signal' . $i . '_id')->first();
        }
        return $signals;
    }
    public function signal1()
    {
        return $this->hasOne(ForexSignals::class, 'id', 'signal1_id');
    }

    public function signal2()
    {
        return $this->hasOne(ForexSignals::class, 'id', 'signal2_id');
    }

    public function signal3()
    {
        return $this->hasOne(ForexSignals::class, 'id', 'signal3_id');
    }

    public function signal4()
    {
        return $this->hasOne(ForexSignals::class, 'id', 'signal4_id');
    }

    public function signal5()
    {
        return $this->hasOne(ForexSignals::class, 'id', 'signal5_id');
    }
}
