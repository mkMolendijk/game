const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

module.exports = {

  entry: [
    'webpack-hot-middleware/client',
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'build/libs/'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.tsx$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loaders: ['react-hot-loader'],

      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CheckerPlugin(),
  ]
};