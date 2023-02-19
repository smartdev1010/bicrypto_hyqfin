<?php

namespace App\Models\Eco;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EcoNetworks extends Model
{
    use HasFactory;

    public function tokens()
    {
        return $this->hasMany(EcoTokens::class);
    }

    public function mainnet_tokens()
    {
        return $this->hasMany(EcoMainnetTokens::class);
    }
}