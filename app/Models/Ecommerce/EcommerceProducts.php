<?php

namespace App\Models\Ecommerce;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EcommerceProducts extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(EcommerceCategory::class, 'category_id', 'id');
    }

    public function wishlist($id)
    {
        return EcommerceWishlist::where('product_id', $this->id)->where('user_id', $id)->first();;
    }
}
