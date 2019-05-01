# Webpack Boilerplate

This is a minimal webpack configuration to quickly start a project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites
To run the application on your local machine you need to have [Node.js](https://nodejs.org/) installed. It is also required to have [Yarn](https://yarnpkg.com) installed globally.

```
brew install yarn
```

### Installing
To run the project locally execute the following steps:

Clone the project to your machine, navigate to the directory and remove the git folder
```
git clone git@github.com:tomhoogenboom/webpack-boilerplate.git <name-of-your-project>
cd <name-of-your-project>
rm -rf .git 
```
Install the dependencies via yarn:
```
yarn
```
Run the project:
```
yarn start
```

This will launch a webpack dev server with hot reloading configured. 

For a production build execute:
```
yarn build
```

Webpack will transpile & bundle your JavaScript, compile SCSS into CSS and copy html files and images from `src` folder into a `dist` folder.

## Built With

* [webpack](https://webpack.js.org) 

## Authors

* **Tom Hoogenboom** - [tomhoogenboom](https://github.com/tomhoogenboom)
