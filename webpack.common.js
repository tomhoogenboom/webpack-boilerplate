const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const htmlConfig = {
  title: 'Webpack Boilerplate',
  template: './src/index.html'
}

const cssConfig = {
  filename: 'style.[contenthash].css'
}

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // Cleans the dist folder before every build
    new HtmlWebpackPlugin(htmlConfig),
    new MiniCssExtractPlugin(cssConfig)
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          'style-loader', // now we here
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader' // starting from the bottom
        ]
      }
    ]
  }
}
