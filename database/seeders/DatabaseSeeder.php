<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Booking;
use App\Models\Payment;
use App\Models\Station;
use App\Models\Post;
use App\Models\User;
use Route;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // User::factory()->create([
        //     'name' => 'admin',
        //     'email' => 'admin@naijarails.com',
        //     'password' => bcrypt('admin1234'),
        // ]);

        // User::factory(10)->create();

        // Booking::factory(10)->create();

        // Payment::factory(10)->create();

        // Station::factory(10)->create();

        Route::factory(10)->create();


        // Post::factory(10)->create();

    }
}
