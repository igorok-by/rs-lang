const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: './img/[name].[ext]',
        },
      },
      {
        test: /\.(ttf|otf|webp|eot|woff|woff2)$/i, //
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts',
        },
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: './audio/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'src/config/postcss.config.js' } },
            loader : 'postcss-loader',
            options : {sourceMap : true, config : {path : './src/config/postcss.config.js'}},
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'src/config/postcss.config.js' } },

            loader  : 'postcss-loader',
            options : {sourceMap : true, config : {path : './src/config/postcss.config.js'}},

          }, {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CopyWebpackPlugin([
      { from: './src/assets/img/', to: './img/' },
      { from: './src/games/english-puzzle/assets/img', to: './img/english-puzzle' },
      { from: './src/games/speakIt/assets/img', to: './img/speakIt' },
      { from: './src/games/audio-call/assets/img', to: './img/audio-call' },
      { from: './src/games/sprint/assets/img', to: './img/sprint' },
      { from: './src/games/savanna/assets/img', to: './img/savanna' }
    ]),
<<<<<<< HEAD

=======
>>>>>>> feat: fix game
  ],
  resolve: {
    extensions: ['.js'],
  },
};
