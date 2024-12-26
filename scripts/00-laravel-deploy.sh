#!/usr/bin/env bash

set -e  # Exit immediately if a command exits with a non-zero status
echo "Starting Laravel deployment script"

echo "Running composer to install dependencies"
composer install --no-dev --working-dir=/var/www/html

echo "Publishing Livewire assets..."
php artisan livewire:publish

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running database migrations..."
php artisan migrate --force

echo "Running database seeder..."
php artisan db:seed --force

echo "Optimizing Filament..."
php artisan filament:optimize

echo "Laravel deployment script completed successfully."
