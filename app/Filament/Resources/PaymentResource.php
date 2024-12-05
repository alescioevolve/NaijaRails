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

    public static function getNavigationGroup(): ?string
    {
        return 'User Management';
    }

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
