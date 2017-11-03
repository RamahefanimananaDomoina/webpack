var path = require('path');
var root = path.resolve(__dirname);
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// var extractCSS = new ExtractTextPlugin('bundle.css');

module.exports = {
    entry: {
        app: ['./src/main.css', './src/main.js']
    },
    output:{
        path: path.resolve(__dirname, './dist') ,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                include: root
            },{
                test: /\.css$/,
                loader: "style-loader!css-loader"
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