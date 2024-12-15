# Stage 1: Composer Dependencies
FROM composer:2 AS composer-builder
WORKDIR /app

# Copy only composer files first
COPY composer.json composer.lock ./

# Ensure storage and cache directories exist
RUN mkdir -p storage/framework/{cache,views,sessions} bootstrap/cache && \
    chmod -R 777 storage bootstrap/cache

# Install Composer dependencies
RUN composer install --no-dev --no-scripts --no-autoloader --ignore-platform-reqs

# Copy the rest of the project
COPY . .

# Generate autoloader
RUN composer dump-autoload --no-dev --optimize

# Stage 2: Node.js Build
FROM node:16 AS node-builder
WORKDIR /app

# Copy the entire project
COPY . .

# Copy Composer vendor directory from previous stage
COPY --from=composer-builder /app/vendor /app/vendor

# Install dependencies and build the assets
RUN npm install && npm run build

# Stage 3: Final production image
FROM richarvey/nginx-php-fpm:3.1.6
WORKDIR /var/www/html

# Install PHP extensions
RUN apk add --no-cache icu icu-dev && docker-php-ext-configure intl && docker-php-ext-install intl

# Suppress deprecation warnings
RUN echo "error_reporting = E_ALL & ~E_DEPRECATED & ~E_NOTICE" > /usr/local/etc/php/conf.d/error_reporting.ini

# Copy the entire project
COPY . .

# Copy Composer dependencies
COPY --from=composer-builder /app/vendor /var/www/html/vendor

# Copy built assets from node-builder
COPY --from=node-builder /app/build /var/www/html/public/js

# Generate autoloader and cache Laravel configs
RUN composer dump-autoload --no-dev --optimize && \
    php artisan config:cache && \
    php artisan route:cache

# Docker Image Config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1
ENV APP_NAME "NaijaRails"
ENV LOG_CHANNEL stderr
ENV COMPOSER_ALLOW_SUPERUSER 1

# Expose default HTTP and HTTPS ports
EXPOSE 80 443

# Start the container
CMD ["/start.sh"]
