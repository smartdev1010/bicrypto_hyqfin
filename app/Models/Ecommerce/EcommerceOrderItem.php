<?php

namespace App\Models\Ecommerce;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EcommerceOrderItem extends Model
{
    protected $guarded = [];

    public function product()
    {
        return $this->belongsTo(Products::class, 'product_id', 'id');
    }
}
