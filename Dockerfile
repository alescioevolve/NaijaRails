# Stage 1: Build the React.js (Inertia.js) frontend
FROM node:18 AS node-builder
WORKDIR /app

# Copy the React.js frontend code
COPY . .

# Copy frontend source files
COPY resources ./resources
COPY vite.config.js ./
COPY postcss.config.js ./
COPY tailwind.config.js ./

# Install dependencies and build the assets
RUN npm install && npm run build

# Stage 2: Final production image
FROM richarvey/nginx-php-fpm:3.1.6

# Copy Laravel backend code
COPY . .

# Install dependencies (without dev dependencies)
RUN composer install --no-dev --optimize-autoloader

# Publlish php artisan livewire
RUN php artisan livewire:publish

# Cache Laravel configs
RUN php artisan config:cache && \
    php artisan route:cache

# Set working directory
WORKDIR /var/www/html

# Copy built assets from node-builder
COPY --from=node-builder /app/public/build /var/www/html/public/build

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