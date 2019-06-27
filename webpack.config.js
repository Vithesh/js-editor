const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

dotenv.config();

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './client/index.html',
});

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: './client/index.js',
  devServer: {
    port: process.env.CLIENT_PORT,
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    new MonacoWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.SERVER_PORT': process.env.SERVER_PORT,
    }),
  ],
};
