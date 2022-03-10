<?php

/**
 * One For The Code - Default Laravel Traits.
 *
 * Commonly used traits for laravel 8.x and 9.x used by
 * One For The Code and All In One
 *
 * @copyright 2022 One For The Code
 * @author Dennis de Houx <dennis@aio.be>
 *
 * @category Traits
 *
 * @version 1.0.0
 *
 * @since 1.0.0
 */

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
