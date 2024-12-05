<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Route>
 */
class RouteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'origin_station_id' => \App\Models\Station::factory(),
            'destination_station_id' => \App\Models\Station::factory(),
            'route_code' => $this->faker->unique()->ean13(),
            'distance' => $this->faker->randomFloat(2, 0, 1000),
            'estimated_duration' => $this->faker->time(),
        ];
    }
}
