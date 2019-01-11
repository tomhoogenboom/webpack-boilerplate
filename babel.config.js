module.exports = function (api) {
  api.cache(true) // avoid re-executing the config function

  const presets = ['@babel/preset-env']

  const plugins = ['@babel/plugin-transform-runtime'] //@babel/plugin-transform-runtime reduces the bundle size

  return {
    presets,
    plugins
  }
}
