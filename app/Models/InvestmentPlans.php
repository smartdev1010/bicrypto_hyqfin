<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvestmentPlans extends Model
{
    use HasFactory;

    const STATUS_ACTIVE = 'active';
    const STATUS_INACTIVE = 'inactive';
    const STATUS_EXPIRED = 'expired';


    protected $fillable = [
        'name',
        'description',
        'interest_rate',
        'min_amount',
        'max_amount',
        'investment_term',
        'total_investors',
        'status',
        'start_date',
        'end_date',
    ];

    public function investmentLogs()
    {
        return $this->hasMany(InvestmentLog::class);
    }

    public function getTotalInvestedAttribute()
    {
        return $this->investmentLogs()->where('status', 2)->sum('amount');
    }

    public function getRemainingInvestmentAmountAttribute()
    {
        return $this->max_amount - $this->getTotalInvestedAttribute();
    }

    public function getIsOpenAttribute()
    {
        return $this->status === 1 && $this->end_date > now();
    }

    public function getIsCompletedAttribute()
    {
        return $this->status === 2;
    }

    public function getIsActiveAttribute()
    {
        return $this->status === 1;
    }

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', 2);
    }

    public function scopeOpen($query)
    {
        return $query->where('status', 1)->where('end_date', '>', now());
    }
}
