<h1 align="center">GD FACTURAS API</h1>
 

## Construido con
- [Laravel 10](https://github.com/laravel/framework)
- [spatie/laravel-permission](https://github.com/spatie/laravel-permission)
- [Laravel Breeze](https://github.com/laravel/breeze)
- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Inertiajs](https://inertiajs.com/)
- [Admin One - Admin Dashboard](https://github.com/justboil/admin-one-vue-tailwind)

## Instalación

Habra una terminal y ejecute
- `npm install`
- `npm run dev`
- Cree una nueva base de datos MySQL y actualice los detalles de la base de datos en el archivo `.env` 
Habra una segunda terminal y ejecute
- `composer install` 
- `php artisan vendor:publish --provider="BalajiDharma\LaravelAdminCore\AdminCoreServiceProvider"`
- `php artisan vendor:publish --provider="BalajiDharma\LaravelMenu\MenuServiceProvider"`
- `php artisan migrate --seed --seeder=AdminCoreSeeder`
- `php artisan migrate`
- `php artisan db:seed`
- `php artisan serve`
- Iniciara el servidor http://localhost:8000/

###### SUPER Admin Login
- Email - superadmin@example.com
- Password - password
 