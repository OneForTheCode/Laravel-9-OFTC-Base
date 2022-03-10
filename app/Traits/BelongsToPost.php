<?php

namespace App\Traits;

trait BelongsToPost
{
    /**
     * Get the post that owns the BelongsToPost.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }
}
