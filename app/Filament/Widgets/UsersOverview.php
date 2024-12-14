<?php

namespace App\Filament\Widgets;

use App\Models\User;
use App\Models\Ticket;
use App\Models\Schedule;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class UsersOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Users', User::count())
                ->description('Review Pending Trains Bookings')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->color('success')
                ->chart([2, 1, 4, 5, 6, 2, 3]),
            Stat::make('Active Bookings', Ticket::where('status', '=', 'confirmed')->count())
                ->description('Increase in Passengers')
                ->descriptionIcon('heroicon-m-arrow-trending-down')
                ->color('danger')
                ->chart([2, 1, 4, 5, 6, 9, 3]),
            Stat::make('Train Schedules', Schedule::count())
                ->description('All train schedules')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->color('success')
                ->chart([2, 1, 4, 5, 6, 2, 3])
        ];
    }
}
