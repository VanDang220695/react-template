const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        chunkFilter: (chunk) => {
          if (chunk.name === 'vendor') {
            return false;
          }
          return true;
        },
        cache: true,
        sourceMap: true,
        test: /\.js(\?.*)?$/i,
        exclude: /node_modules/,
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
});
