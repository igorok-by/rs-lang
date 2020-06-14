
const path = require("path");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    watch: false,
    entry: {
        script: ['@babel/polyfill','./src/js/script.js', './src/scss/style.scss'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf|mp3|woff)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ]
    },
    devServer: {
        contentBase: './public'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/html/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyWebpackPlugin([
            { from: './src/assets/img/', to: './img/'},
            { from: './src/assets/fonts/', to: './fonts/'}
        ])

    ],
    resolve: {
        extensions: ['.js']

    }
}


module.exports = config;