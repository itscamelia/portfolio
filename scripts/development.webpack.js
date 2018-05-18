const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

const loaders = require('./loaders');
const entries = require('./entries');

module.exports = {
  mode: 'development',
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.')
  },
  resolve: {
    modules: [
      path.resolve('./app'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify('development')
    }),
    new htmlWebpackPlugin({
      template: './app/index.html',
      filename: 'index.html',
      inject: 'body',
      hash: true
    }),
    new extractTextWebpackPlugin('build.css')
  ],
  module: {
    rules: loaders
  }
}
