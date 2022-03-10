<?php

namespace App\Traits;

trait BelongsToProduct
{
    /**
     * Get the product that owns the BelongsToProduct.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
