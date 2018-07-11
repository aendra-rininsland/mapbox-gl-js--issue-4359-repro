/**
 * @file
 * Webpack config
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { optimize } = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js',
  plugins: [
    new HtmlWebpackPlugin(),
  ]
};
