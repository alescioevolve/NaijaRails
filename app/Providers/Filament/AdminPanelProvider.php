<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->colors([
                'primary' => Color::Emerald,
            ])
            ->font(family: 'Poppins')

            // Brand Header Text and Logo
            ->brandName('NaijaRails')
            // ->brandLogo(asset('images/logo-dk.svg'))
            // ->brandLogoHeight('2.3rem')
            // ->darkModeBrandLogo('images/logo-wt.svg')

            // 

            ->sidebarCollapsibleOnDesktop()
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([
                Widgets\AccountWidget::class,
                Widgets\FilamentInfoWidget::class,
            ])
            // ->unsavedChangesAlerts()
            ->spa() // Add this line to enable SPA mode
            // ->spaMode('modal') // You can choose between 'modal' or 'full' for loading indicator SEEMS VERSION !! AND FILAMENT DONT SUPPORt THIS FEATURE
            //  ->navigationDelay(300); // Set the delay in milliseconds
            // ->loadingIndicatorColor('primary') // Add this line to set loading indicator color
            // ->loadingIndicatorColor(Color::Emerald) // Or use specific colors
            // ->loadingIndicatorColor('#FF5733') // You can also use hex colors
            // Set Color Theme
            // ->colors([
            //     'primary' => Color::Amber,
            //     'danger' => Color::Rose,
            //     'gray' => Color::Slate,
            //     'info' => Color::Blue,
            //     'success' => Color::Emerald,
            //     'warning' => Color::Orange,
            // ])

            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
