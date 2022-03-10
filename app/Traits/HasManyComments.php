<?php

namespace App\Traits;

trait HasManyComments
{
    /**
     * Get all of the comments for the HasManyComments.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
