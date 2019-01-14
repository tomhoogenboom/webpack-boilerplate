# Webpack Boilerplate
This is a minimal setup for webpack, it includes transpiling & bundling javascript and compiles Sass to CSS.

## Installation
Download, clone or fork this repo and execute the following commands in your terminal via `yarn`.

## Usage
To fire up the development server execute `yarn develop` if you however just want to make a (production) build, execute `yarn build`. This will bundle bundle everything and place it in the `/dist` folder.

### Notes
At the moment of writing, the [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) does not support hot reloading yet, since I like to have this feature for development I decided to use the `style-loader` which injects the styles in the head of the html page.
