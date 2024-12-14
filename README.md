# Laravel Inertia React

This is a Laravel project with Inertia.js and React.js.

## Installation

- Clone the repository with `git clone`
- Install the dependencies with `composer install`
- Run `npm install`
- Copy the .env.example file to .env and configure your database settings
- Run the migrations with `php artisan migrate`

- OR START FRESH HERE
- Run Laravel new project-name (no starter, PEST)
- Use Sqlite
- Run default database migrations, yes
- cd project-name
- Run Install the node dependencies with `npm install && npm run build`
- Run the development server with `composer run dev`
- Run the development server with `npm i react react-dom`
- Run to begin setting up React to Inertia`npm install --save-dev @vitejs/plugign-react`
- Run `composer require inertiajs/inertia-laravel`
- Server side setup [https://inertiajs.com/server-side-setup]
- Run for Server Side Setup`php artisan inertia:middleware`
- Client side setup [https://inertiajs.com/client-side-setup]
- Run `npm install @inertiajs/react`
- Install tailwindCss [https://tailwindcss.com/docs/guides/laravel]
- Configure TailwindCss and vite config

## Features

- [Laravel 11.x](https://laravel.com/docs/11.x)
- [Inertia.js](https://inertiajs.com/)
- [React 18.x](https://reactjs.org/)
- [Tailwind CSS 3.x](https://tailwindcss.com/)
- [Vite 5.x](https://vitejs.dev/)
- [Laravel Sanctum](https://laravel.com/docs/11.x/sanctum)

## Security Vulnerabilities

If you discover a security vulnerability within this project, please send an e-mail to [Your Email Address](mailto:your@address.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

###


<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PaymentResource\Pages;
use App\Filament\Resources\PaymentResource\RelationManagers;
use App\Models\Payment;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PaymentResource extends Resource
{
    protected static ?string $model = Payment::class;

    protected static ?string $navigationIcon = 'heroicon-o-banknotes';
    protected static ?string $navigationGroup = 'Booking Management';

    // public static function getNavigationGroup(): ?string
    // {
    //     return 'User Management';
    // }

    public static function getNavigationSort(): ?int
    {
        return 2; // Change the number to set the order (lower numbers come first)
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('amount')->required(),
                Forms\Components\TextInput::make('transaction_id')->required(),
                Forms\Components\Select::make('payment_method')
                    ->options([
                        'credit_card' => 'Credit Card',
                        'debit_card' => 'Debit Card',
                        'paypal' => 'Paypal',
                    ]),
                Forms\Components\Select::make('status')
                    ->options([
                        'pending' => 'Pending',
                        'paid' => 'Success',
                        'unpaid' => 'Failed',
                    ]),

                Forms\Components\DatePicker::make('payment_date')
                    ->required()
                    ->maxDate(now()),
                Forms\Components\Select::make('id')
                    ->relationship('booking', 'id')
                    ->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('amount'),
                Tables\Columns\TextColumn::make('transaction_id'),
                Tables\Columns\TextColumn::make('booking_id'),
                Tables\Columns\TextColumn::make('payment_method')->sortable(),
                Tables\Columns\TextColumn::make('status')->sortable()
                    ->badge()
                    ->colors([
                        'success' => 'paid', // Green for "paid"
                        'warning' => 'pending', // Yellow for "pending"
                        'danger' => 'unpaid', // Red for "unpaid"
                    ]),
                Tables\Columns\TextColumn::make('payment_date'),
                // Tables\Columns\TextColumn::make('owner.name'),
            ])
            ->filters([
                // Tables\Filters\SelectFilter::make('payment_status')
                //     ->options([
                //         'pending' => 'Pending',
                //         'paid' => 'Success',
                //         'unpaid' => 'Failed',
                //     ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                // Tables\Actions\ViewAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPayments::route('/'),
            'create' => Pages\CreatePayment::route('/create'),
            'edit' => Pages\EditPayment::route('/{record}/edit'),
        ];
    }
}
