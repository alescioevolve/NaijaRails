# Stage 1: Build the React.js (Inertia.js) frontend
FROM node:16 AS node-builder
WORKDIR /app
# Copy the entire project
COPY . .
# Install dependencies and build the assets
RUN npm install && npm run build

# Stage 2: Composer dependencies
FROM composer:2 AS composer-builder
WORKDIR /var/www/html
# Copy only the files needed for composer
COPY composer.json composer.lock ./
# Install dependencies without dev dependencies
RUN composer install --no-dev --no-scripts --no-autoloader

# Stage 3: Final production image
FROM richarvey/nginx-php-fpm:3.1.6
# Set working directory
WORKDIR /var/www/html

# Copy the entire project
COPY . .

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
# Laravel config
ENV APP_NAME "NaijaRails"
ENV LOG_CHANNEL stderr
# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

# Start the container
CMD ["/start.sh"]

