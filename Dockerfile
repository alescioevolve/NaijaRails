# Stage 1: Composer Dependencies
FROM composer:2 AS composer-builder
# Use a specific PHP image with required extensions
FROM php:8.2-cli-alpine

WORKDIR /var/www/html

# Install system dependencies and PHP extensions
RUN apk add --no-cache \
    icu-dev \
    && docker-php-ext-install intl

# Copy composer files
COPY composer.json composer.lock ./

# Install Composer dependencies
RUN composer install \
    --no-dev \
    --no-scripts \
    --no-autoloader \
    --ignore-platform-reqs

# Stage 2: Node.js Build
FROM node:16 AS node-builder
WORKDIR /app

# Copy the entire project
COPY . .

# Copy Composer vendor directory from previous stage
COPY --from=composer-builder /var/www/html/vendor /app/vendor

# Install dependencies and build the assets
RUN npm install && npm run build

# Stage 3: Final production image
FROM richarvey/nginx-php-fpm:3.1.6
WORKDIR /var/www/html

# Install PHP extensions
RUN apk add --no-cache \
    icu-dev \
    && docker-php-ext-install intl

# Copy the entire project
COPY . .

# Copy Composer dependencies
COPY --from=composer-builder /var/www/html/vendor /var/www/html/vendor

# Copy built assets from node-builder
COPY --from=node-builder /app/build /var/www/html/public/js

# Generate autoloader and cache Laravel configs
RUN composer dump-autoload --no-dev --optimize && \
    php artisan config:cache && \
    php artisan route:cache

# ... rest of the Dockerfile remains the same

# Docker Image Config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1
# Laravel config
ENV APP_NAME "NaijaRails"
ENV LOG_CHANNEL stderr
# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

# Start the container
CMD ["/start.sh"]

