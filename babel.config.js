module.exports = function (api) {
  api.cache(true) // avoid re-executing the config function

  const presets = ['@babel/preset-env']

  const plugins = []

  return {
    presets,
    plugins
  }
}
