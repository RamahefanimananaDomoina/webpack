var path = require('path');
var root = path.resolve(__dirname, '../')

module.exports = {
    entry: {
        app: ['./src/main.css', './src/main.js']
    },
    output:{
        path: path.resolve(__dirname, '../dist') ,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },   
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                include: root
            },{
                test:/\.(jpg|png|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '[name]-[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: []
}