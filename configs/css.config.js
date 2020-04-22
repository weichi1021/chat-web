const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const css_config = {
  test: /\.css$/i,
  use: [{
    loader: MiniCssExtractPlugin.loader,
  }, {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
    },
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: () => [require('autoprefixer')]
    }
  }]
}

module.exports = css_config;
