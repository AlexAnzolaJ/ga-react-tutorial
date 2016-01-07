var webpack = require('webpack');  
module.exports = {  
    entry: [
      'babel-polyfill',
      // 'webpack/hot/only-dev-server',
      './src/app.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            // { 
            //   test: /\.js?$/, 
            //   loaders: ['react-hot', 'babel'],
            //   exclude: /node_modules/
            // },
            { 
              test: /\.js$/, 
              exclude: /node_modules/, 
              loader: 'babel-loader',
              query: {
                presets:['es2015', 'react', 'stage-0']
              }
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

