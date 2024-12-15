# Stage 1: Composer Dependencies
FROM composer:2 AS composer-builder
WORKDIR /app

# Copy composer files and install dependencies
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --ignore-platform-reqs

# Copy project files
COPY . .

# Ensure storage and cache directories exist and have proper permissions
RUN mkdir -p storage/framework/{cache,views,sessions} bootstrap/cache && \
    chmod -R 777 storage bootstrap/cache && \
    composer dump-autoload --no-dev --optimize

# Stage 2: Node.js Build
FROM node:16 AS node-builder
WORKDIR /app

# Copy project files and vendor directory
COPY . .
COPY --from=composer-builder /app/vendor /app/vendor

# Install Node.js dependencies and build assets
RUN npm install && npm run build

# Stage 3: Final Production Image
FROM richarvey/nginx-php-fpm:3.1.6
WORKDIR /var/www/html

# Install PHP extensions
RUN apk add --no-cache icu icu-dev && docker-php-ext-configure intl && docker-php-ext-install intl

# Copy project files, dependencies, and built assets
COPY . .
COPY --from=composer-builder /app/vendor /var/www/html/vendor
COPY --from=node-builder /app/build /var/www/html/public/js

# Optimize Laravel setup
RUN php artisan config:clear && \
    php artisan config:cache && \
    php artisan route:clear && \
    php artisan route:cache && \
    chmod -R 777 storage bootstrap/cache

# Environment Variables
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV APP_NAME "NaijaRails"
ENV LOG_CHANNEL stderr

# Expose default ports
EXPOSE 80 443

# Start the container
CMD ["/start.sh"]
