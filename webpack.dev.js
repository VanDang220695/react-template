const { merge } = require('webpack-merge');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const common = require('./webpack.common');
const chalk = require('chalk');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    compress: true,
    port: 8000,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new ProgressBarPlugin({
      width: 200,
      format:
        '  build [:bar] ' +
        chalk.green.bold(':percent') +
        ' (:elapsed seconds)',
      clear: false,
    }),
  ],
});
