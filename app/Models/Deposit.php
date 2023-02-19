<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Deposit extends Model
{
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':deposits', now()->addHours(4), function () {
            return self::with(['gateway'])->get();
        });
    }
    public function getCached($id)
    {
        return Cache::remember($this->cacheKey($this) . ':deposits_user', now()->addHours(4), function () use ($id) {
            return self::where('user_id', $id)->with(['gateway'])->latest()->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':deposits_user');
        Cache::forget($this->cacheKey($this) . ':deposits');
        return self::getCache();
    }
    protected $table = 'deposits';
    protected $guarded = ['id'];

    protected $casts = [
        'detail' => 'object'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function gateway()
    {
        return $this->belongsTo(Gateway::class, 'method_code', 'code');
    }

    // scope
    public function scopeGateway_currency()
    {
        return GatewayCurrency::where('method_code', $this->method_code)->where('currency', $this->method_currency)->first();
    }

    public function scopeBaseCurrency()
    {
        return $this->gateway->crypto == 1 ? 'USD' : $this->method_currency;
    }

    public function scopePending()
    {
        return $this->where('status', 2);
    }

    public function deposits_chart($get = 30)
    {
        $deposits = Cache::remember($this->cacheKey($this) . ':deposits', now()->addHours(4), function () {
            return self::get();
        });
        $data['amount'] = $deposits->where('status', 1)->sum('amount');
        $data['fees'] = $deposits->where('status', 1)->sum('charge');
        $data['total'] = $deposits->where('status', 1)->count();
        $data['pending'] = $deposits->where('status', 2)->count();
        $data['last_week'] = $deposits->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        $data['chart'] = Cache::get($this->cacheKey($this) . ':deposits_chart');
        if (!$data['chart']) {
            $data['chart'] = self::chart('days', $get, 'deposits');
            Cache::put($this->cacheKey($this) . ':deposits_chart', $data['chart'], now()->addHours(4));
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
                case 'deposits':
                    $usr = self::where('status', 1)->whereDate('created_at', $lw->format('Y-m-d'))->sum('amount');
                    break;
                default:
                    $usr = self::whereDate('created_at', $lw->format('Y-m-d'))->count();
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
