<?php

namespace App\Models;

use App\Models\Forex\ForexAccounts;
use App\Models\MLM\MLM;
use App\Models\MLM\MLMBV;
use App\Models\MLM\MLMDaily;
use App\Models\P2P\P2PAds;
use App\Traits\CacheKeyTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;

class User extends Authenticatable implements MustVerifyEmail
{
    use CacheKeyTrait;
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    protected $guard = 'admin';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'password',
        'name',
        'firstname',
        'lastname',
        'username',
        'country',
        'profile_photo_path',
        'zip',
        'state',
        'city',
        'ref_by',
        'role_id',
        'ethAddress',
        'phone'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'address' => 'object',
        'ver_code_send_at' => 'datetime'
    ];

    protected $data = [
        'data' => 1
    ];

    public function login_logs()
    {
        return $this->hasMany(UserLogin::class);
    }

    public function forex_account()
    {
        return $this->hasOne(ForexAccounts::class);
    }

    public function user_meta()
    {
        return $this->hasOne(UserMeta::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class)->orderBy('id', 'desc');
    }

    public function deposits()
    {
        return $this->hasMany(Deposit::class)->where('status', '!=', 0)->get();
    }

    public function withdrawals()
    {
        return Cache::remember($this->cacheKey($this) . ':withdrawals_user', now()->addHours(4), function () {
            return $this->hasMany(Withdrawal::class)->where('status', '!=', 0)->get();
        });
    }

    public function practice_log()
    {
        return Cache::remember($this->cacheKey($this) . ':binary_practice_log_user', now()->addHours(4), function () {
            return $this->hasMany(PracticeLog::class)->get();
        });
    }

    public function practice_log_limit($limit = 10)
    {
        return Cache::remember($this->cacheKey($this) . ':binary_practice_log_user_limit', now()->addHours(4), function () use ($limit) {
            return $this->hasMany(PracticeLog::class)->latest()->limit($limit)->get();
        });
    }

    public function trade_log()
    {
        return Cache::remember($this->cacheKey($this) . ':binary_trade_log_user', now()->addHours(4), function () {
            return $this->hasMany(TradeLog::class)->get();
        });
    }

    public function tokens()
    {
        return $this->hasMany(Tokens::class);
    }

    public function trade_log_limit($limit = 10)
    {
        return Cache::remember($this->cacheKey($this) . ':binary_trade_log_user_limit', now()->addHours(4), function () use ($limit) {
            return $this->hasMany(TradeLog::class)->latest()->limit($limit)->get();
        });
    }


    public function scheduled_orders()
    {
        return $this->hasMany(ScheduledOrders::class)->orderby('created_at', 'desc');
    }

    public function thirdparty_transactions()
    {
        return Cache::remember($this->cacheKey($this) . ':thirdparty_transactions', now()->addHours(4), function () {
            return $this->hasMany(ThirdpartyTransactions::class)->orderby('created_at', 'desc');
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':user_meta');
        Cache::forget($this->cacheKey($this) . ':withdrawals_user');
        Cache::forget($this->cacheKey($this) . ':binary_practice_log_user');
        Cache::forget($this->cacheKey($this) . ':binary_practice_log_user_limit');
        Cache::forget($this->cacheKey($this) . ':binary_trade_log_user');
        Cache::forget($this->cacheKey($this) . ':binary_trade_log_user_limit');
        return self::getCache();
    }

    // mlm
    public function mlm()
    {
        return $this->hasOne(MLM::class, 'username', 'username');
    }
    public function kyc_application()
    {
        return $this->hasOne(KYC::class, 'userId', 'id');
    }

    public function direct_downlines()
    {
        return Cache::remember($this->cacheKey($this) . ':direct_downlines', now()->addHours(4), function () {
            return $this->where('ref_by', $this->id)->select('id', 'firstname', 'lastname', 'username')->get();
        });
    }

    public function mlm_withdrawable()
    {
        $all = $this->hasMany(MLMBV::class);
        return ($all->where('status', 0)->sum('amount') - $all->where('status', 2)->sum('amount'));
    }

    public function mlm_daily_bv()
    {
        return $this->hasMany(MLMDaily::class);
    }

    public function unilevel_downlines()
    {
        return Cache::remember($this->cacheKey($this) . ':unilevel_downlines', now()->addHours(4), function () {
            // echo $this->id;
            $downlines = $this->where('ref_by', $this->id)
                ->with('mlm')
                ->select('id', 'firstname', 'lastname', 'username')
                ->get();
            $this->getAllDownlines($downlines);
            return $downlines;
        });
    }

    private function getAllDownlines(&$downlines)
    {

        foreach ($downlines as &$downline) {
            // echo $downline->id;
            $sub_downlines = $this->where('ref_by', $downline->id)
                ->with('mlm')
                ->select('id', 'firstname', 'lastname', 'username')
                ->get();
            // echo $sub_downlines;
            $downline->downlines = $sub_downlines;
            if (!$sub_downlines->isEmpty()) {
                $this->getAllDownlines($sub_downlines);
            }
        }
    }

    public function clearMlmCache()
    {
        Cache::forget($this->cacheKey($this) . ':user_mlm');
        Cache::forget($this->cacheKey($this) . ':direct_downlines');
        Cache::forget($this->cacheKey($this) . ':unilevel_downlines');
        return self::getCache();
    }
    // end mlm //

    // wallets
    public function wallets($type)
    {
        return Cache::remember($this->cacheKey($this) . ':wallets' . $type, now()->addHours(4), function () use ($type) {
            return $this->hasMany(Wallet::class)->where('type', $type)->get();
        });
    }

    public function clearWalletsCache($type)
    {
        Cache::forget($this->cacheKey($this) . ':wallets_transactions');
        Cache::forget($this->cacheKey($this) . ':frozen_wallets');
        Cache::forget($this->cacheKey($this) . ':wallets' . $type);
        return self::getCache();
    }

    public function frozen_wallets()
    {
        return Cache::remember($this->cacheKey($this) . ':frozen_wallets', now()->addHours(4), function () {
            return WalletsFrozen::where('user_id', $this->id)->first();
        });
    }

    public function wallet()
    {
        return $this->hasMany(Wallet::class)->orderby('created_at', 'desc');
    }

    public function wallets_transactions()
    {
        return Cache::remember($this->cacheKey($this) . ':wallets_transactions', now()->addHours(4), function () {
            return $this->hasMany(WalletsTransactions::class)->orderby('created_at', 'desc');
        });
    }
    // end wallets //

    // p2p
    public function ads()
    {
        return Cache::remember($this->cacheKey($this) . ':user_ads', now()->addHours(4), function () {
            return $this->hasMany(P2PAds::class)->orderby('created_at', 'desc');
        });
    }

    public function clearP2PCache()
    {
        Cache::forget($this->cacheKey($this) . ':user_ads');
        return self::getCache();
    }
    // end p2p //

    // SCOPES

    public function getFullnameAttribute()
    {
        return $this->firstname . ' ' . $this->lastname;
    }
    public function scopeActive()
    {
        return $this->where('status', 1);
    }

    public function scopeBanned()
    {
        return $this->where('status', 0);
    }

    public function scopeEmailUnverified()
    {
        return $this->whereNull('email_verified_at');
    }

    public function scopeSmsUnverified()
    {
        return $this->where('sv', 0);
    }
    public function scopeEmailVerified()
    {
        return $this->whereNotNull('email_verified_at');
    }

    public function scopeSmsVerified()
    {
        return $this->where('sv', 1);
    }


    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }


    public function sendEmailVerificationNotification()
    {
        $url = URL::temporarySignedRoute(
            'verification.verify',
            Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
            [
                'id' => $this->getKey(),
                'hash' => sha1($this->getEmailForVerification()),
            ]
        );
        notify($this, 'EMAIL_VERIFY', [
            "url" => $url,
        ], ['email']);
    }

    public function sendPasswordResetNotification($token)
    {
        $url = url(route('password.reset', [
            'token' => $token,
            'email' => $this->getEmailForPasswordReset(),
        ], false));
        notify($this, 'PASS_RESET_CODE', [
            "url" => $url,
        ], ['email']);
    }

    public function routeNotificationForOneSignal()
    {
        return ['include_external_user_ids' => [strval($this->id)]];
    }

    public function getChartCache($label, $get, $type)
    {
        return Cache::remember($this->cacheKey($this) . ':' . $label, now()->addHours(4), function () use ($get, $type) {
            return self::chart('days', $get, $type);
        });
    }
    public function allusers($get = 30)
    {
        // $kyc = new KYC;
        Carbon::setWeekStartsAt(Carbon::MONDAY);
        Carbon::setWeekEndsAt(Carbon::SUNDAY);
        $data['count'] = Cache::remember($this->cacheKey($this) . ':all_users_count', now()->addHours(4), function () {
            return self::count();
        });
        $data['last_week'] = Cache::remember($this->cacheKey($this) . ':all_users_last_week', now()->addHours(4), function () {
            return self::whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        });
        $data['chart'] = self::getChartCache('all_users_chart', $get, 'all');
        return (object) $data;
    }

    public function verified($get = 30)
    {
        // $kyc = new KYC;
        Carbon::setWeekStartsAt(Carbon::MONDAY);
        Carbon::setWeekEndsAt(Carbon::SUNDAY);
        // $data['all'] = self::count();
        // $data['kyc_last_week'] = $kyc->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        $data['unverified'] = Cache::remember($this->cacheKey($this) . ':unverified_percentage', now()->addHours(4), function () {
            return ceil(((self::where('email_verified_at', null)->count()) * 100) / self::count());
        });
        $data['percentage'] = Cache::get($this->cacheKey($this) . ':verified_percentage');
        if (!$data['percentage']) {
            $data['percentage'] = $data['unverified'] != 0 ? (100 - $data['unverified']) : 0;
            Cache::put($this->cacheKey($this) . ':verified_percentage', $data['percentage'], now()->addHours(4));
        }
        $data['count'] = Cache::remember($this->cacheKey($this) . ':verified_count', now()->addHours(4), function () {
            return self::where('email_verified_at', '!=', null)->count();
        });
        $data['last_week'] = Cache::remember($this->cacheKey($this) . ':verified_last_week', now()->addHours(4), function () {
            return self::where('email_verified_at', '!=', null)->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        });
        // $data['kyc_submit'] = $kyc->count();
        // $data['kyc_approved'] = $kyc->where('status', 'approved')->count();
        // $data['kyc_pending'] = $kyc->count() > 0 ? ceil((($kyc->where('status', 'pending')->count()) * 100) / $kyc->count()) : 0;
        // $data['kyc_missing'] = $kyc->count() > 0 ? ceil((($kyc->where('status', 'missing')->count()) * 100) / $kyc->count()) : 0;

        $data['chart'] = self::getChartCache('verified_chart', $get, 'verified');
        return (object) $data;
    }

    public function unverified($get = 30)
    {
        $data['count'] = Cache::remember($this->cacheKey($this) . ':unverified_count', now()->addHours(4), function () {
            return self::where('email_verified_at', null)->count();
        });
        $data['last_week'] = Cache::remember($this->cacheKey($this) . ':unverified_last_week', now()->addHours(4), function () {
            return self::where('email_verified_at', null)->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        });
        $data['percentage'] = Cache::remember($this->cacheKey($this) . ':unverified_percentage', now()->addHours(4), function () {
            return ceil(((self::where('email_verified_at', null)->count()) * 100) / self::count());
        });

        $data['chart'] = self::getChartCache('unverified_chart', $get, 'unverified');
        return (object) $data;
    }

    public static function chart(string $dates = 'days', int $get = 30, string $type = 'all'): object
    {
        $now = Carbon::now();
        $data = [
            $dates => null,
            'data' => null,
        ];

        switch ($dates) {
            case 'days':
                $lastWeek = $now->copy()->subDays($get);
                $diff = $now->diffInDays($lastWeek);
                $format = 'D';
                break;
            case 'months':
                $lastWeek = $now->copy()->subMonths(12);
                $diff = $now->diffInMonths($lastWeek);
                $format = 'M';
                break;
            default:
                return (object) $data;
        }

        for ($i = 1; $i <= $diff; $i++) {
            switch ($type) {
                case 'all':
                    $count = self::whereDate('created_at', $lastWeek->format('Y-m-d'))->count();
                    break;
                case 'verified':
                    $count = self::where('email_verified_at', '!=', null)
                        ->whereDate('created_at', $lastWeek->format('Y-m-d'))
                        ->count();
                    break;
                case 'unverified':
                    $count = self::where('email_verified_at', null)
                        ->whereDate('created_at', $lastWeek->format('Y-m-d'))
                        ->count();
                    break;
                default:
                    $count = self::whereDate('created_at', $lastWeek->format('Y-m-d'))->count();
                    break;
            }
            $data['data'] .= $count . ",";
            $data[$dates] .= '"' . $lastWeek->format($format) . '",';

            switch ($dates) {
                case 'days':
                    $lastWeek->addDay();
                    break;
                case 'months':
                    $lastWeek->addMonth();
                    break;
                default:
                    break;
            }
        }
        return (object) $data;
    }
}