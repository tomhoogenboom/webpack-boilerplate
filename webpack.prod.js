const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssConfig = {
  filename: 'style.[contenthash].css'
}

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin(cssConfig)
  ],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, // now we here
          'css-loader',
          'sass-loader' // starting from the bottom
        ]
      }
    ]
  }
})
