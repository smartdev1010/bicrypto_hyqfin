<?php

namespace App\Models\MLM;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class MLM extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':all_mlm', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':all_mlm');
        Cache::forget($this->cacheKey($this) . ':binary_tree');
        return self::getCache();
    }
    protected $table = 'mlm';

    public function plan()
    {
        return $this->belongsTo(MLMPlan::class, 'rank', 'rank');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'username', 'username');
    }

    public function getH($username)
    {
        return Cache::remember($this->cacheKey($this) . ':mlm_record' . $username, now()->addHours(1), function () use ($username) {
            return $this->where('username', $username)->first();
        });
    }

    public function binary_downlines()
    {
        return Cache::remember($this->cacheKey($this) . ':binary_tree', now()->addHours(4), function () {
            $mlm = $this->first();
            $mlm['L'] = $this->getH($mlm->L);
            if ($mlm['L'] != null) {
                $mlm['L']['L'] = $this->getH($mlm['L']->L);
                if ($mlm['L']['L'] != null) {
                    $mlm['L']['L']['L'] = $this->getH($mlm['L']['L']->L);
                    if ($mlm['L']['L']['L'] != null) {
                        $mlm['L']['L']['L']['L'] = $this->getH($mlm['L']['L']['L']->L);
                        if ($mlm['L']['L']['L']['L'] != null) {
                            $mlm['L']['L']['L']['L']['L'] = $this->getH($mlm['L']['L']['L']['L']->L);
                            $mlm['L']['L']['L']['L']['R'] = $this->getH($mlm['L']['L']['L']['L']->R);
                        }
                        $mlm['L']['L']['L']['R'] = $this->getH($mlm['L']['L']['L']->R);
                        if ($mlm['L']['L']['L']['R'] != null) {
                            $mlm['L']['L']['L']['R']['L'] = $this->getH($mlm['L']['L']['L']['R']->L);
                            $mlm['L']['L']['L']['R']['R'] = $this->getH($mlm['L']['L']['L']['R']->R);
                        }
                    }
                    $mlm['L']['L']['R'] = $this->getH($mlm['L']['L']->R);
                    if ($mlm['L']['L']['R'] != null) {
                        $mlm['L']['L']['R']['L'] = $this->getH($mlm['L']['L']['R']->L);
                        if ($mlm['L']['L']['R']['L'] != null) {
                            $mlm['L']['L']['R']['L']['L'] = $this->getH($mlm['L']['L']['R']['L']->L);
                            $mlm['L']['L']['R']['L']['R'] = $this->getH($mlm['L']['L']['R']['L']->R);
                        }
                        $mlm['L']['L']['R']['R'] = $this->getH($mlm['L']['L']['R']->R);
                        if ($mlm['L']['L']['R']['R'] != null) {
                            $mlm['L']['L']['R']['R']['L'] = $this->getH($mlm['L']['L']['R']['R']->L);
                            $mlm['L']['L']['R']['R']['R'] = $this->getH($mlm['L']['L']['R']['R']->R);
                        }
                    }
                }
                $mlm['L']['R'] = $this->getH($mlm['L']->R);
                if ($mlm['L']['R'] != null) {
                    $mlm['L']['R']['L'] = $this->getH($mlm['L']['R']->L);
                    if ($mlm['L']['R']['L'] != null) {
                        $mlm['L']['R']['L']['L'] = $this->getH($mlm['L']['R']['L']->L);
                        if ($mlm['L']['R']['L']['L'] != null) {
                            $mlm['L']['R']['L']['L']['L'] = $this->getH($mlm['L']['R']['L']['L']->L);
                            $mlm['L']['R']['L']['L']['R'] = $this->getH($mlm['L']['R']['L']['L']->R);
                        }
                        $mlm['L']['R']['L']['R'] = $this->getH($mlm['L']['R']['L']->R);
                        if ($mlm['L']['R']['L']['R'] != null) {
                            $mlm['L']['R']['L']['R']['L'] = $this->getH($mlm['L']['R']['L']['R']->L);
                            $mlm['L']['R']['L']['R']['R'] = $this->getH($mlm['L']['R']['L']['R']->R);
                        }
                    }
                    $mlm['L']['R']['R'] = $this->getH($mlm['L']['R']->R);
                    if ($mlm['L']['R']['R'] != null) {
                        $mlm['L']['R']['R']['L'] = $this->getH($mlm['L']['R']['R']->L);
                        if ($mlm['L']['R']['R']['L'] != null) {
                            $mlm['L']['R']['R']['L']['L'] = $this->getH($mlm['L']['R']['R']['L']->L);
                            $mlm['L']['R']['R']['L']['R'] = $this->getH($mlm['L']['R']['R']['L']->R);
                        }
                        $mlm['L']['R']['R']['R'] = $this->getH($mlm['L']['R']['R']->R);
                        if ($mlm['L']['R']['R']['R'] != null) {
                            $mlm['L']['R']['R']['R']['L'] = $this->getH($mlm['L']['R']['R']['R']->L);
                            $mlm['L']['R']['R']['R']['R'] = $this->getH($mlm['L']['R']['R']['R']->R);
                        }
                    }
                }
            }
            $mlm['R'] = $this->getH($mlm->R);
            if ($mlm['R'] != null) {
                $mlm['R']['L'] = $this->getH($mlm['R']->L);
                if ($mlm['R']['L'] != null) {
                    $mlm['R']['L']['L'] = $this->getH($mlm['R']['L']->L);
                    if ($mlm['R']['L']['L'] != null) {
                        $mlm['R']['L']['L']['L'] = $this->getH($mlm['R']['L']['L']->L);
                        if ($mlm['R']['L']['L']['L'] != null) {
                            $mlm['R']['L']['L']['L']['L'] = $this->getH($mlm['R']['L']['L']['L']->L);
                            $mlm['R']['L']['L']['L']['R'] = $this->getH($mlm['R']['L']['L']['L']->R);
                        }
                        $mlm['R']['L']['L']['R'] = $this->getH($mlm['R']['L']['L']->R);
                        if ($mlm['R']['L']['L']['R'] != null) {
                            $mlm['R']['L']['L']['R']['L'] = $this->getH($mlm['R']['L']['L']['R']->L);
                            $mlm['R']['L']['L']['R']['R'] = $this->getH($mlm['R']['L']['L']['R']->R);
                        }
                    }
                    $mlm['R']['L']['R'] = $this->getH($mlm['R']['L']->R);
                    if ($mlm['R']['L']['R'] != null) {
                        $mlm['R']['L']['R']['L'] = $this->getH($mlm['R']['L']['R']->L);
                        if ($mlm['R']['L']['R']['L'] != null) {
                            $mlm['R']['L']['R']['L']['L'] = $this->getH($mlm['R']['L']['R']['L']->L);
                            $mlm['R']['L']['R']['L']['R'] = $this->getH($mlm['R']['L']['R']['L']->R);
                        }
                        $mlm['R']['L']['R']['R'] = $this->getH($mlm['R']['L']['R']->R);
                        if ($mlm['R']['L']['R']['R'] != null) {
                            $mlm['R']['L']['R']['R']['L'] = $this->getH($mlm['R']['L']['R']['R']->L);
                            $mlm['R']['L']['R']['R']['R'] = $this->getH($mlm['R']['L']['R']['R']->R);
                        }
                    }
                }
                $mlm['R']['R'] = $this->getH($mlm['R']->R);
                if ($mlm['R']['R'] != null) {
                    $mlm['R']['R']['L'] = $this->getH($mlm['R']['R']->L);
                    if ($mlm['R']['R']['L'] != null) {
                        $mlm['R']['R']['L']['L'] = $this->getH($mlm['R']['R']['L']->L);
                        if ($mlm['R']['R']['L']['L'] != null) {
                            $mlm['R']['R']['L']['L']['L'] = $this->getH($mlm['R']['R']['L']['L']->L);
                            $mlm['R']['R']['L']['L']['R'] = $this->getH($mlm['R']['R']['L']['L']->R);
                        }
                        $mlm['R']['R']['L']['R'] = $this->getH($mlm['R']['R']['L']->R);
                        if ($mlm['R']['R']['L']['R'] != null) {
                            $mlm['R']['R']['L']['R']['L'] = $this->getH($mlm['R']['R']['L']['R']->L);
                            $mlm['R']['R']['L']['R']['R'] = $this->getH($mlm['R']['R']['L']['R']->R);
                        }
                    }
                    $mlm['R']['R']['R'] = $this->getH($mlm['R']['R']->R);
                    if ($mlm['R']['R']['R'] != null) {
                        $mlm['R']['R']['R']['L'] = $this->getH($mlm['R']['R']['R']->L);
                        if ($mlm['R']['R']['R']['L'] != null) {
                            $mlm['R']['R']['R']['L']['L'] = $this->getH($mlm['R']['R']['R']['L']->L);
                            $mlm['R']['R']['R']['L']['R'] = $this->getH($mlm['R']['R']['R']['L']->R);
                        }
                        $mlm['R']['R']['R']['R'] = $this->getH($mlm['R']['R']['R']->R);
                        if ($mlm['R']['R']['R']['R'] != null) {
                            $mlm['R']['R']['R']['R']['L'] = $this->getH($mlm['R']['R']['R']['R']->L);
                            $mlm['R']['R']['R']['R']['R'] = $this->getH($mlm['R']['R']['R']['R']->R);
                        }
                    }
                }
            }
            return $mlm;
        });
    }
}
