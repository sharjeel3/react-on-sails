var webpack = require('webpack');
var path = require('path');


var APP_DIR = path.resolve(__dirname, 'views');
var BUILD_DIR = path.resolve(__dirname, 'assets/js/dist');

var jsxConfig = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};


module.exports = [jsxConfig];