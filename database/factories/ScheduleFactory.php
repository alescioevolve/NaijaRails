<?php

namespace Database\Factories;

use App\Models\Schedule;
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

    protected $model = Schedule::class;
    public function definition(): array
    {
        // Array of possible origin and destination values
        $locations = [
            'Abuja',
            'Kaduna',
            'Lagos',
            'Oyo',
            'Port Harcourt',
            'Maiduguri',
            'Kano',
            'Kafanchan',
            'Enugu',
            'Warri-Itakpe',
            'Zaria',
            'Bauchi',
            'Ogun',
            'Cross River'
        ];

        $origin = $this->faker->randomElement($locations);
        $destination = $this->faker->randomElement(array_diff($locations, [$origin])); // Ensure origin != destination

        return [
            'train_name' => $this->faker->company . ' Express',
            'origin' => $origin,
            'destination' => $destination,
            'departure_time' => $this->faker->dateTimeBetween('now', '+1 week'),
            'arrival_time' => $this->faker->dateTimeBetween('+1 week', '+2 weeks'),
            'train_class' => $this->faker->randomElement(['Economy', 'Business', 'First Class']),
            'available_seats' => $this->faker->numberBetween(20, 100),
            'price' => $this->faker->randomFloat(2, 1000, 5000),
        ];
    }
}
