const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge.strategy({
  //This makes sure that the css loader gets used before the css loaders from the common config
  'module.rules': 'prepend'
})(common, {
  mode: 'development',
  output: {
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    clientLogLevel: 'error'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: 'style-loader'
      }
    ]
  }
})
