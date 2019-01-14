const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          'style-loader', // now we here
          'css-loader',
          'sass-loader' // starting from the bottom
        ]
      }
    ]
  }
})
