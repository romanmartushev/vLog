const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.setPublicPath("./public_html");

mix.js('resources/js/app.js', 'js')
    .sass('resources/sass/app.scss', 'css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    });
