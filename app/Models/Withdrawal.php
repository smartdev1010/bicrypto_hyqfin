<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Withdrawal extends Model
{
    use CacheKeyTrait;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':withdrawals', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getCacheByUser($id)
    {
        return Cache::remember($this->cacheKey($this) . ':withdrawals_user', now()->addHours(4), function () use ($id) {
            return self::where('user_id', $id)->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':withdrawals_user');
        Cache::forget($this->cacheKey($this) . ':withdrawals');
        return self::getCache();
    }
    protected $guarded = ['id'];

    protected $casts = [
        'withdraw_information' => 'object'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function method()
    {
        return $this->belongsTo(WithdrawMethod::class, 'method_id');
    }

    public function scopePending()
    {
        return $this->where('status', 2);
    }

    public function scopeApproved()
    {
        return $this->where('status', 1);
    }

    public function scopeRejected()
    {
        return $this->where('status', 3);
    }


    public function withdrawals_chart($get = 30)
    {
        $withdrawals = Cache::remember($this->cacheKey($this) . ':withdrawals', now()->addHours(4), function () {
            return self::get();
        });
        $data['amount'] = $withdrawals->where('status', 1)->sum('amount');
        $data['fees'] = $withdrawals->where('status', 1)->sum('charge');
        $data['total'] = $withdrawals->where('status', 1)->count();
        $data['pending'] = $withdrawals->where('status', 2)->count();
        $data['last_week'] = $withdrawals->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        $data['chart'] = Cache::get($this->cacheKey($this) . ':withdrawals_chart');
        if (!$data['chart']) {
            $data['chart'] = self::chart('days', $get, 'withdrawals');
            Cache::put($this->cacheKey($this) . ':withdrawals_chart', $data['chart'], now()->addHours(4));
        }

        return (object) $data;
    }
    public static function chart($dates = 'days', $get = 30, $type = 'all')
    {
        $cd = Carbon::now(); //->toDateTimeString();
        switch ($dates) {
            case 'days':
                $lw = $cd->copy()->subDays($get);
                $cd = $cd->copy()->addDays(1);
                $df = $cd->diffInDays($lw);
                $format = 'D';
                break;
            case 'months':
                $lw = $cd->copy()->subMonths(12);
                $cd = $cd->copy()->addMonths(1);
                $df = $cd->diffInMonths($lw);
                $format = 'M';
                break;
            default:
                break;
        }
        $data[$dates] = null;
        $data['data'] = null;
        // $data['data_alt'] = null;
        // $data['days_alt'] = null;
        $usr = 0;
        for ($i = 1; $i <= $df; $i++) {
            switch ($type) {
                case 'withdrawals':
                    $usr = self::where('status', 1)->whereDate('created_at', $lw->format('Y-m-d'))->sum('amount');
                    break;
                default:
                    break;
            }
            $data['data'] .= $usr . ",";
            $data[$dates] .= '"' . $lw->format($format) . '",';
            // $data['data_alt'][$i] = $usr;
            // $data['days_alt'][$i] = ($get > 27 ? $lw->format('D, d M') : $lw->format('D'));
            switch ($dates) {
                case 'days':
                    $lw->addDay();
                    break;
                case 'months':
                    $lw->addMonth();
                    break;
                default:
                    break;
            }
        }
        return (object) $data;
    }
}
