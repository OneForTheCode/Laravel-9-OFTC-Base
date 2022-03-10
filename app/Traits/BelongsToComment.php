<?php

namespace App\Traits;

trait BelongsToComment
{
    /**
     * Get the comment that owns the BelongsToComment.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function comment(): BelongsTo
    {
        return $this->belongsTo(Comment::class);
    }
}
