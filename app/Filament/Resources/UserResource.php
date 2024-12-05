<?php

namespace App\Filament\Resources;


use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;


class UserResource extends Resource
{
    protected static ?string $model = User::class;

    public static function getNavigationGroup(): ?string
    {
        return 'User Management';
    }

    public static function getNavigationSort(): ?int
    {
        return 1;
    }

    protected static ?string $navigationIcon = 'heroicon-o-user-group'; //rectangle-stack

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')->required()->maxlength(255),
                Forms\Components\TextInput::make('email')->required()->email()->maxlength(255),
                Forms\Components\TextInput::make('password')->required()->maxlength(255),
                Forms\Components\TextInput::make('address')->required()->maxlength(255),
                Forms\Components\TextInput::make('phone_number')->required()->maxlength(255)->name('residence'),

                // Forms\Components\Select::make('type')
                //     ->options([
                //         'admin' => 'Administrator',
                //         'user' => 'Regular User',
                //     ])->createOptionForm([
                //             Forms\Components\TextInput::make('name')
                //                 ->required()
                //                 ->maxLength(255),
                //             Forms\Components\TextInput::make('email')
                //                 ->label('Email address')
                //                 ->email()
                //                 ->required()
                //                 ->maxLength(255),
                //             Forms\Components\TextInput::make('phone')
                //                 ->label('Phone number')
                //                 ->tel()
                //                 ->required(),
                //         ]) // THis createOPtionForm is for creating a new option in the select field without leaving the page
                //     ->required(),
                // Forms\Components\DatePicker::make('date_of_birth')
                //     ->required()
                //     ->maxDate(now()),
                // Forms\Components\Select::make('owner_id')
                //     ->relationship('owner', 'name')
                //     ->required(),
            ]);

    }

    public static function table(Table $table): Table
    {
        return $table
            // ->searchable()
            ->columns([
                // Tables\Columns\TextColumn::make('id'),
                Tables\Columns\TextColumn::make('name')->label('UserName')->searchable(),
                Tables\Columns\TextColumn::make('email')->label('Email address')->sortable(),
                Tables\Columns\TextColumn::make('phone_number')->label('Phone Number'),
                Tables\Columns\TextColumn::make('address')->label('Residence')->limit(10),
                // Tables\Columns\TextColumn::make('owner.name'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'cat' => 'Cat',
                        'dog' => 'Dog',
                        'rabbit' => 'Rabbit',
                    ]),
            ])
            ->actions([
                // Tables\Actions\ViewAction::make(),
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\EditAction::make(),

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
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
