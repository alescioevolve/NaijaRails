<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Station extends Model
{
    /** @use HasFactory<\Database\Factories\StationFactory> */
    use HasFactory;

    protected $guarded = [];

    protected $fillable = [
        'station_code',
        'name',
        'location',
    ];


    public function routes(): BelongsToMany
    {
        return $this->belongsToMany(Route::class, 'route_station')->withTimestamps()->withPivot('order');
    }
}
