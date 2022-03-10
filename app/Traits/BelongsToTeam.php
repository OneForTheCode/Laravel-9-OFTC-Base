<?php

namespace App\Traits;

trait BelongsToTeam
{
    /**
     * Get the user that owns the BelongsToTeam.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }
}
