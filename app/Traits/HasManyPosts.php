<?php

namespace App\Traits;

trait HasManyPosts
{
    /**
     * Get all of the posts for the HasManyPosts.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
