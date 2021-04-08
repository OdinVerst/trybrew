const path = require('path');
const configPath = require('./config.entrypoint');

module.exports = {
  entry: {
    ...configPath.js.webpack,
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.ts|.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  }
};
