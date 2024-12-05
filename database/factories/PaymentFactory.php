<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'booking_id' => \App\Models\Booking::factory(),
            'amount' => $this->faker->randomFloat(2, 0, 1000),
            'payment_method' => $this->faker->randomElement(['cash', 'credit_card', 'debit_card']),
            'transaction_id' => $this->faker->uuid,
            'status' => $this->faker->randomElement(['pending', 'paid', 'unpaid']),
            'payment_date' => $this->faker->dateTimeBetween('-1 year', 'now'),

        ];
    }
}
