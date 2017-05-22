const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'libs/bundle.[hash].js'
  },
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.js', '.ts']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Alienator',
    })
  ]
};