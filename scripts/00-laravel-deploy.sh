#00-laravel-deploy.sh

#!/usr/bin/env bash

set -e  # Exit immediately if a command exits with a non-zero status
echo "Starting Laravel deployment script"

echo "Running npm install"
npm install 

echo "Running npm run build"
npm run build

echo "Running composer"
composer install --no-dev --working-dir=/var/www/html

# Publish assets (Livewire, Scribe, etc.)
# echo "Publishing Livewire assets..."
# php artisan livewire:publish

# echo "Generating Scribe API documentation..."
# php artisan scribe:generate

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force

echo "Running seeder..."
php artisan db:seed --force

echo "Optimizing Filament..."
php artisan filament:optimize

echo "Laravel deployment script completed successfully."

