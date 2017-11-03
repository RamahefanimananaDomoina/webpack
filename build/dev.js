var webpack = require('webpack')

var config = require('./webpack.dev.js')
var chokidar = require('chokidar')
var webpackDeServer = require('webpack-dev-server')
var port = 8080

var compiler = webpack(config)
var hotMiddleWare = require('webpack-hot-middleware')(compiler)

chokidar.watch('./*.html').on('all', function(path) {
    console.log('le fichier ' + path + ' a changé ')
    hotMiddleWare.publish({action: 'reload'})
})
var server = new webpackDeServer(compiler, {
    hot: true,
    contentBase: './',
    quiet: false,
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: { colors: true }
});
server.use(hotMiddleWare)

server.listen(port, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("j'ecoute sur le port " + port)
    }
})
