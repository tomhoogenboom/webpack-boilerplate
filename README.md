# Webpack Boilerplate
This is a minimal setup for webpack, it includes transpiling & bundling javascript and compiles Sass to CSS.

## Installation
Download, clone or fork this repo and execute the following commands in your terminal via `yarn`.

## Usage
To fire up the development server execute `yarn develop` if you however just want to make a (production) build, execute `yarn build`. This will bundle bundle everything and place it in the `/dist` folder.

### Notes
* To use assets like images in the html templates, use `require()`, example: `<img src="<%= require('./assets/images/image.jpg') %>" />`.
