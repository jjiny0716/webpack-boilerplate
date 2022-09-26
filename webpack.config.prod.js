const webpack = require("webpack");
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = "production";

module.exports = {
  mode,
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, '../BE/public'),
    filename: "main.js",
    assetModuleFilename: 'resource/image/[name].[ext]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        type: 'asset/resource',
        exclude: /node_modules/,
      },
    ],
  },  
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'resource', to: "resource" } // static폴더로부터
      ]
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(mode === "development"),
    }),
  ],
};
