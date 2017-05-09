const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

module.exports = {

  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'build/libs/'),
    filename: 'bundle.[hash].js'
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
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
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
  ]
};