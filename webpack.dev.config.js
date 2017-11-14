const webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  plugins:[
       new LiveReloadPlugin({appendScriptTag: true}),
       getImplicitGlobals()
  ],
  module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
        },
        { test: /\.less$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.png$/,loader: "url-loader?limit=100000"  },
        { test: /\.jpg$/, loader: "file-loader" },
        { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  }
};


/*
* here using hoisting so don't use `var NAME = function()...`
*/
function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
    $:      'jquery',
    jQuery: 'jquery',
    jquery: 'jquery'
  });
}
