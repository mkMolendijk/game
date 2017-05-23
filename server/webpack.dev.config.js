const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  entry: [
    'webpack-hot-middleware/client',
    './src/index.ts'
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'libs/bundle.js',
    publicPath: '/'
  },
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.js', '.ts']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      title: 'Alienator [DEV]',
    })
  ]
};