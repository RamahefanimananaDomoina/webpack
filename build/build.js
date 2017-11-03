var webpack = require('webpack')
var ora = require('ora')
var conf = require('./webpack.prod.js')
require('shelljs/global')
var spinner = ora('chargement...')
spinner.start()
rm('-rf', 'dist')

webpack(conf, function(err, stats){
    spinner.stop()
    if(err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        module: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})