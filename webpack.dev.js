const path = require('path');
const webpack = require("webpack");
const merge = require('webpack-merge');
const VersionFile = require('webpack-version-file');
const buildInfo = require('child_process');

const common = require("./webpack.common.js");
const Package = require("./package.json");

const envParser = require("./utils/envParser.js");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    port: 9000,
    inline: true
  },
  plugins: [
    new webpack.DefinePlugin(envParser(path.join(__dirname, ".env.dev"))),
    new VersionFile({
      output: path.resolve(__dirname, "dist/frontendInfo.json"),
      package: './package.json',
      template: './frontendInfo.ejs',
      data: {
        PROJECT_NAME: Package.name,
        PROJECT_VERSION: Package.version,
        GIT_COMMIT_ID: buildInfo.execSync("git log -1 --format=format:%h"),
        GIT_COMMIT_DATE: buildInfo.execSync("git log -1 --format=format:%ci"),
        BUILD_MODE: process.env.MODE,
        BUILD_DATE: new Date().toISOString(),
        FE_API_URL: process.env.API_URL,
        FE_WS_URL: process.env.WS_URL,
      }
    })
  ]
});