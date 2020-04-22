const path = require('path');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const eslint_config = require(path.join(__dirname, '/configs/eslint.config.js'));
const babel_config = require(path.join(__dirname, '/configs/babel.config.js'));
const file_config = require(path.join(__dirname, '/configs/file.config.js'));
const css_config = require(path.join(__dirname, '/configs/css.config.js'));
const sass_config = require(path.join(__dirname, '/configs/sass.config.js'));

module.exports = {
  entry: {
    index: path.join(__dirname, '/src/index.jsx'),
    vendors: ['react', 'react-dom', 'react-router-dom', '@fortawesome/react-fontawesome']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      eslint_config,
      babel_config,
      file_config,
      css_config,
      sass_config
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    modules: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './src')
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  performance: {
    "hints": false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Black ToolBox Laboratory',
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true
      },
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new MiniCssExtractPlugin('index.css'),
    new CopyPlugin([
      { from: 'public/favicon.ico', to: 'dist/favicon.ico' }
    ]),
  ],
};