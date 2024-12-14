<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ScheduleResource\Pages;
use App\Filament\Resources\ScheduleResource\RelationManagers;
use App\Models\Schedule;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ScheduleResource extends Resource
{
    protected static ?string $model = Schedule::class;

    protected static ?string $navigationIcon = 'heroicon-o-clipboard';
    protected static ?string $navigationGroup = 'Booking Management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('train_name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('origin')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('destination')
                    ->required()
                    ->maxLength(255),
                Forms\Components\DateTimePicker::make('departure_time')
                    ->required(),
                Forms\Components\DateTimePicker::make('arrival_time')
                    ->required(),
                Forms\Components\Select::make('train_class')
                    ->options([
                        'Economy' => 'Economy',
                        'Business' => 'Business',
                        'First Class' => 'First Class',
                    ])
                    ->required(),
                Forms\Components\TextInput::make('available_seats')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('price')
                    ->required()
                    ->numeric(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('train_name')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('origin')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('destination')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('departure_time')->dateTime()->sortable(),
                Tables\Columns\TextColumn::make('arrival_time')->dateTime()->sortable(),
                Tables\Columns\TextColumn::make('train_class')->sortable(),
                Tables\Columns\TextColumn::make('available_seats')->sortable(),
                Tables\Columns\TextColumn::make('price')->money('USD')->sortable(),
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
            'index' => Pages\ListSchedules::route('/'),
            'create' => Pages\CreateSchedule::route('/create'),
            'edit' => Pages\EditSchedule::route('/{record}/edit'),
        ];
    }
}
