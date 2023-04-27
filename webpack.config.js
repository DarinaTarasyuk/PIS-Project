// імпорт модулів html-webpack-plugin i path
// визначаємо змінні для цих модулів 
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin  = require ('filemanager-webpack-plugin');
//змінна для сss
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Змінна для мінімізації зображень
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

// всі параметри файлу розміщуються в обєкті,
// який експортується як модуль за замовчуванням
module.exports = {
   // налаштування точок входу та виходу
    entry: path.join(__dirname, 'src', 'index.js'),
        output: {
            path:path.join(__dirname,'dist'),
            filename:'index.js',
            // Налаштування для картинок. Зображення будуть зберігатися у папці images
            assetModuleFilename: path.join('images', '[name].[ext]'),
        },
        // Створили об'єкт module, для якого задали правило rules
        module:{
            rules:[
                //правила для шрифтів
                {
                    test:/\.(woff2?|eot|ttf|otf)$/i,
                        type:'asset/resourse',
                        generator:{
                            filename: path.join('fonts', '[name].[contenthash][ext]'),
                        }
                },

                  //правило для зображеь
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                 // svg переносяться у папку icons
                {
                    test: /\.svg$/,
                    type:'asset/resourse',
                    generator:{
                        filename: path.join('icons', '[name].[ext]')
                    }
                },

                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },

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
                        'css-loader', 'postcss-loader', 'sass-loader'
                    ],
                }
            ],
        },


        plugins:[
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

        // налаштування оптимізації зображень
        optimization:{
            minimizer: [
                new ImageMinimizerPlugin({
                    minimizer:{
                        implementation: ImageMinimizerPlugin.imageminMinify,
                            options:{
                                plugins:[
                                    ['gifsicle', {interlaced:true}],
                                    ['jpegtran', {progressive:true}],
                                    ['optipng', {optimizationLevel: 5}],
                                    ['svgo', {name:'preset-default'}],
                                ],
                            },
                    },
                }),
            ],
        },
    // створили обєкт module, для якого задали правило
    // для всіх модулів (файлів) з розширення js webpack буде застосовувати плагін
    // ?babel- loader
    // правило не діє, каталог
    // ?node_modules,
    // що вказується у властивості 
    // ?module.rules.exclude
};