let mix = require('laravel-mix')

mix
    .setPublicPath('dist')
    .js('resources/js/index.js', 'js')
