const path = require('path');

module.exports = {
  entry: ['babel-polyfill'],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'static'),
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};