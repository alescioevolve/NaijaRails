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
        Schema::create('routes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('origin_station_id')->constrained('stations')->onDelete('cascade');
            $table->foreignId('destination_station_id')->constrained('stations')->onDelete('cascade');
            $table->string('route_code')->unique();
            $table->decimal('distance', 10, 2);
            $table->time('estimated_duration');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('routes');
    }
};
