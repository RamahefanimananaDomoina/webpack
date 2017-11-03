var config = require('./webpack.base')
var webpack = require('webpack')

config.entry.app.unshift("./build/dev-client.js");
config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
])

module.exports = config