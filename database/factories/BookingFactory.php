<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'user_id' => fake()->numberBetween(1, 10),
            'schedule_id' => fake()->numberBetween(1, 10),
            'train_id' => fake()->numberBetween(1, 10),
            'ticket_id' => fake()->numberBetween(1, 10),
            'payment_status' => fake()->randomElement(['paid', 'pending', 'unpaid']),
            'number_of_tickets' => fake()->numberBetween(1, 10),
            'total_amount' => fake()->randomFloat(2, 0, 1000),
            'booking_date' => fake()->dateTimeBetween('-1 year', 'now'),
            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'updated_at' => fake()->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
