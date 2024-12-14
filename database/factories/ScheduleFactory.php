<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Schedule>
 */
class ScheduleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'train_name' => $this->faker->company . ' Express',
            'origin' => $this->faker->city,
            'destination' => $this->faker->city,
            'departure_time' => $this->faker->dateTimeBetween('now', '+1 week'),
            'arrival_time' => $this->faker->dateTimeBetween('+1 week', '+2 weeks'),
            'train_class' => $this->faker->randomElement(['Economy', 'Business', 'First Class']),
            'available_seats' => $this->faker->numberBetween(20, 100),
            'price' => $this->faker->randomFloat(2, 1000, 5000),
        ];
    }
}
