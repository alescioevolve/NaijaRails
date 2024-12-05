<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BookingResource\Pages;
use App\Filament\Resources\BookingResource\RelationManagers;
use App\Models\Booking;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BookingResource extends Resource
{
    protected static ?string $model = Booking::class;

    protected static ?string $navigationIcon = 'heroicon-o-clipboard-document-check';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                // Forms\Components\TextInput::make('user_id')->required(),
                // Forms\Components\TextInput::make('schedule_id')->required(),
                // Forms\Components\TextInput::make('train_id')->required(),
                // Forms\Components\TextInput::make('ticket_id')->required(),
                Forms\Components\TextInput::make('payment_status')->required(),
                Forms\Components\TextInput::make('number_of_tickets')->required(),
                Forms\Components\TextInput::make('total_amount')->required(),
                Forms\Components\TextInput::make('booking_date')->required(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->searchable()
            ->columns([
                // Tables\Columns\TextColumn::make('user_id'),
                Tables\Columns\TextColumn::make('user.name')->searchable(),
                Tables\Columns\TextColumn::make('schedule_id'),
                Tables\Columns\TextColumn::make('train_id'),
                Tables\Columns\TextColumn::make('ticket_id'),
                Tables\Columns\TextColumn::make('payment_status')
                    ->sortable()
                    ->badge()
                    ->colors([
                        'success' => 'paid', // Green for "paid"
                        'warning' => 'pending', // Yellow for "pending"
                        'danger' => 'unpaid', // Red for "unpaid"
                    ]),
                Tables\Columns\TextColumn::make('number_of_tickets'),
                Tables\Columns\TextColumn::make('total_amount'),
                Tables\Columns\TextColumn::make('booking_date')->since()->dateTimeTooltip(),
            ])
            ->filters([


            ])
            ->actions([
                // Tables\Actions\ViewAction::make(),
                // Tables\Actions\DeleteAction::make(),
                Tables\Actions\EditAction::make()
                    ->successRedirectUrl(route('filament.admin.resources.bookings.index'))
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
            'index' => Pages\ListBookings::route('/'),
            'create' => Pages\CreateBooking::route('/create'),
            'edit' => Pages\EditBooking::route('/{record}/edit'),
        ];
    }
}
