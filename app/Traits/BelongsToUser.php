<?php

namespace App\Traits;

trait BelongsToUser
{
    /**
     * Get the user that owns the BelongsToUser.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class)->withDefault([new User()]);
    }
}
