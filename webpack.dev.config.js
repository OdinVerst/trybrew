const path = require('path');
const configPath = require('./config.entrypoint');

module.exports = {
  entry: {
    ...configPath.js.webpack,
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
  },
  module: {
    rules: [
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
