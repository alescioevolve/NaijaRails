<?php

namespace Database\Factories;

use App\Models\Ticket;
use App\Models\User;
use App\Models\Schedule;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
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
            'schedule_id' => Schedule::factory(),
            'seat_number' => 'A' . $this->faker->numberBetween(1, 50),
            'status' => $this->faker->randomElement(['pending', 'confirmed']),
        ];
    }
}
