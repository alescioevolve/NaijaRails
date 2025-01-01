<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\User;
use App\Models\Schedule;
use App\Models\Ticket;
use App\Models\Payment;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Post::factory(10)->create();

        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@naijarails.com',
            'password' => bcrypt('admin1234'),
        ]);

        User::factory(10)->create();

        Schedule::factory(10)->create();
        Ticket::factory(10)->create();
        Payment::factory(10)->create();


    }
}
