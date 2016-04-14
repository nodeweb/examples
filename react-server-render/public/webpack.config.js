const webpack = require('webpack');

module.exports = {
  entry:'./app.js',
  output:{
    path:'./',
    filename:'bundle.js'
  },
  module:{
    loaders:[
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',query:{presets:['react','es2015']}}
    ]
  }
}
