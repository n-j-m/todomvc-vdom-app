'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extract = ExtractTextPlugin.extract

const BuildConstants = require('./constants');

const config = {
  entry: [ BuildConstants.ENTRY ],
  output: {
    path: BuildConstants.BUILD_PATH,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include: [BuildConstants.CLIENT_PATH] },
      { test: /\.css$/, loader: extract('style-loader', 'css-loader') }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: require('../package.json').name,
      template: path.resolve(__dirname, 'index-template.html')
    }),
    new ExtractTextPlugin('main.css')
  ]
};

module.exports = config;