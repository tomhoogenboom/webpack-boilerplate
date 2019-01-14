const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlConfig = {
  title: 'Webpack Boilerplate',
  template: './src/index.html'
}

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // Cleans the dist folder before every build
    new HtmlWebpackPlugin(htmlConfig)
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
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')({
                'browsers': ['> 1%', 'last 2 versions']
              })]
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
}
