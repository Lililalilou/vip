const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: [
    path.resolve(__dirname, 'App.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'index.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'main.html'),
    }),
  ],
};
module.exports = config;
