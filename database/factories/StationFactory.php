<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Station>
 */
class StationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // 'station_code' => $this->faker->uuid,
            'station_code' => $this->faker->regexify('[A-Z]{3}[0-9]{4}'),
            'name' => $this->faker->city,
            'location' => $this->faker->city,
        ];
    }
}
