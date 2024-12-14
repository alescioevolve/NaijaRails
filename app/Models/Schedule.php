<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    /** @use HasFactory<\Database\Factories\ScheduleFactory> */
    use HasFactory;

    protected $fillable = [
        'train_name',
        'origin',
        'destination',
        'departure_time',
        'arrival_time',
        'train_class',
        'available_seats',
        'price',
    ];

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

}
