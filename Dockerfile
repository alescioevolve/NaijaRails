# Docker File
# Stage 1: Build the React.js (Inertia.js) frontend
FROM node:18 AS node-builder
WORKDIR /app

# Copy frontend source files
COPY . ./
COPY resources ./resources
COPY vite.config.js ./vite.config.js
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.js ./tailwind.config.js

# Install dependencies and build the assets
RUN npm install && npm run build

# Stage 2: Final production image
FROM richarvey/nginx-php-fpm:3.1.6

# Set working directory
WORKDIR /var/www/html

# Copy Laravel backend code
COPY . ./

# Install PHP dependencies without dev dependencies
RUN composer install --no-dev --optimize-autoloader --working-dir=/var/www/html

# Copy built frontend assets from node-builder
COPY --from=node-builder /app/public/build /var/www/html/public/build

# Cache Laravel configs
RUN php artisan config:cache && \
    php artisan route:cache

# Laravel environment
ENV APP_NAME "NaijaRails"
ENV LOG_CHANNEL stderr
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1
ENV COMPOSER_ALLOW_SUPERUSER 1

# Expose the application port
EXPOSE 80

# Start the container
CMD ["/start.sh"]
