const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssConfig = {
  filename: 'style.[contenthash].css'
}

module.exports = merge.strategy({
  'module.rules': 'prepend'
})(common, {
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
        use: MiniCssExtractPlugin.loader
      }
    ]
  }
})
