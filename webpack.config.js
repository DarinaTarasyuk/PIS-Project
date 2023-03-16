// імпорт модулів html-webpack-plugin i path
// визначаємо змінні для цих модулів 
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin  = require ('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
// всі параметри файлу розміщуються в обєкті,
// який експортується як модуль за замовчуванням
module.exports = {
    // створили обєкт module, для якого задали правило
    // для всіх модулів (файлів) з розширення js webpack буде застосовувати плагін
    // ?babel- loader
    // правило не діє, каталог
    // ?node_modules,
    // що вказується у властивості 
    // ?module.rules.exclude
    module:{
        rules: [
            // правило для перетворення pug файлів
            {
                test: /\.pug$/,
                loader:'pug-loader',
            },
            // правило для файлів Sass
            {
                test: /\.(scss|css)$/,
                use: [
                    //'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'postcss-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [
        // для плагіну html-webpack-plugin ств екземпляр new HtmlWebpackPlugin
        // з двома заданими властивостями
        // template - шлях до вхідного файлу
        // filename - імя вихідного файлу
        new HtmlWebpackPlugin ({
            //dirname - глобальна константа, яка вказує абсолютний шлях до каталогу файлу
           // template: path.join(__dirname, 'src', 'template.html'),
           // замість html (зверху) використовуємо pug
           template: path.join(__dirname, 'src', 'template.pug'),
            filename: 'index.html',
        }),
        // плагін для очищення
        
        new FileManagerPlugin ({
            events:{
                onStart:{
                    delete: ['dist'],
                },
            },
        }),

        new MiniCssExtractPlugin ({
            filename: '[name].css',
        }),
    ],
    // watchfiles вказує на каталог src, за яким спостерігатиме і у випадку зміни, веб-сервер
    // автоматично зробить складання проекту та оновить сторінку
    // port вказує порт, ная кому буде працювати веб-сервер, за замовчуванням - localhost:8080
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port:9000,
    },
};