<?php

namespace App\Policies;

use App\Models\Train;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TrainPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true; // or return false depending on your access logic

    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Train $train): bool
    {
        return true; // or return false depending on your access logic

    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true; // or return false depending on your access logic

    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Train $train): bool
    {
        return true; // or return false depending on your access logic

    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Train $train): bool
    {
        return true; // or return false depending on your access logic

    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Train $train): bool
    {
        return true; // or return false depending on your access logic

    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Train $train): bool
    {
        return true; // or return false depending on your access logic

    }
}
