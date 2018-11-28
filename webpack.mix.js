const { mix } = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 
 mix.webpackConfig({
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'resources/assets/js/'),
      components: path.resolve(__dirname, 'resources/assets/js/components'),
      modules: path.resolve(__dirname, 'resources/assets/js/modules'),
    },
  },
});

mix.react('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
