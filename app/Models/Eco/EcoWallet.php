<?php

namespace App\Models\Eco;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EcoWallet extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function log()
    {
        return $this->hasMany(EcoLog::class, 'wallet_id')->orderBy('id', 'DESC');
    }
}