<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TicketResource\Pages;
use App\Filament\Resources\TicketResource\RelationManagers;
use App\Models\Ticket;
use Egulias\EmailValidator\Warning\Warning;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TicketResource extends Resource
{
    protected static ?string $model = Ticket::class;

    protected static ?string $navigationIcon = 'heroicon-o-ticket';
    protected static ?string $navigationGroup = 'Booking Management';

    public static function getNavigationBadge(): ?string
    {
        // return 'NEW';
        return static::getModel()::where('status', '=', 'confirmed')->count();

    }

    public static function getNavigationBadgeColor(): ?string
    {
        // return 'NEW';
        return static::getModel()::where('status', '=', 'confirmed')->count() < 10
            ? 'warning'
            : 'primary';

    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->required(),
                Forms\Components\Select::make('schedule_id')
                    ->relationship('schedule', 'train_name')
                    ->searchable()
                    ->required(),
                Forms\Components\TextInput::make('seat_number')
                    ->required(),
                Forms\Components\Select::make('status')
                    ->options([
                        'pending' => 'Pending',
                        'confirmed' => 'Confirmed',
                    ])
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')->label('User')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('schedule.train_name')->label('Train')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('seat_number')->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->sortable()
                    ->badge()
                    ->colors([
                        'success' => 'confirmed', // Green for "paid"
                        'warning' => 'pending', // Yellow for "pending"
                    ])
                ,
                Tables\Columns\TextColumn::make('created_at')
                    ->sortable()
                    ->dateTime(),


            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListTickets::route('/'),
            'create' => Pages\CreateTicket::route('/create'),
            'edit' => Pages\EditTicket::route('/{record}/edit'),
        ];
    }
}
