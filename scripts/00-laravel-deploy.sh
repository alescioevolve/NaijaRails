#!/usr/bin/env bash
echo "Running npm install"
npm install

echo "Running npm run build"
npm run build

echo "Running composer"
composer install --no-dev --working-dir=/var/www/html

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force

echo "Running seeder..."
php artisan db:seed

echo "Optimizing Filament..."
php artisan filament:optimize

echo "Generate API docs.."
php artisan scribe:generate
