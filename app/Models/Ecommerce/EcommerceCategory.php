<?php

namespace App\Models\Ecommerce;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EcommerceCategory extends Model
{
    use HasFactory;
    protected $table = 'ecommerce_categories';
    protected $fillable = [
        'name',
        'slug',
        'icon',
    ];


    public function products()
    {
        return $this->hasMany(EcommerceProducts::class, 'category_id', 'id');
    }
}
