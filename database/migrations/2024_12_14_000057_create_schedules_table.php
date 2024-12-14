<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->string('train_name');
            $table->string('origin'); // Starting point of the train
            $table->string('destination'); // Ending point of the train
            $table->timestamp('departure_time');
            $table->timestamp('arrival_time');
            $table->string('train_class'); // e.g., Economy, Business, First Class
            $table->integer('available_seats');
            $table->decimal('price', 10, 2); // Price per ticket
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedules');
    }
};
