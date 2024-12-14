<?php

namespace Database\Factories;

use App\Models\Payment;
use App\Models\User;
use App\Models\Ticket;
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
            'user_id' => User::factory(),
            'ticket_id' => Ticket::factory(),
            'amount' => $this->faker->randomFloat(2, 1000, 5000),
            'status' => $this->faker->randomElement(['successful', 'pending', 'failed']),
            'transaction_id' => $this->faker->uuid,
        ];
    }
}
