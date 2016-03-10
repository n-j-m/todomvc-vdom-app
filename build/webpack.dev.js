'use strict';

require('dotenv').load();

const webpack = require('webpack');
const merge = require('webpack-merge');

const mergeCommon = merge.bind(null, require('./webpack.common'));

module.exports = mergeCommon({
  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    host: process.env.HOST,
    port: process.env.PORT
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});