<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Model;
use Filament\Panel;
use Filament\FilamentManager;
use Filament\Facades\Filament;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Model::unguard(); // This tells Laravel "don't worry about mass assignment protection"

        // Configure Filament Panel
        // Panel::configureUsing(function (Panel $panel): void {
        //     $panel
        //         ->brandLogo(fn() => view('filament.custom.logo'))
        //         ->brandLogoHeight('2.3rem');
        // });

    }
}
