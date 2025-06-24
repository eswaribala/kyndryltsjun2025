const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const imageWebpackLoader = require('image-webpack-loader');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
    output: {
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'production',
  module: {
    rules: [
       {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'] // extracts and loads CSS
      },
       {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true, quality: 70 },
              optipng: { enabled: true },
              pngquant: { quality: [0.65, 0.90], speed: 4 },
              gifsicle: { interlaced: false },
              webp: { quality: 75 }
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
   optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(), // Minify CSS
      new TerserPlugin(),       // Minify JS
    ]
  },
  performance: {
  maxAssetSize: 512000,
  maxEntrypointSize: 512000,
},
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: './dist/index.html'
    })
  ],
  devServer: {
    static: './dist',
    port: 3000,
    open: true
  }
};
