<?php

namespace App\Traits;

trait HasManyProducts
{
    /**
     * Get all of the products for the HasManyProducts.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
