var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [
    "./web/static/css/app.css",
    "./web/static/js/app.js"
  ],

  output: {
    path: "./priv/static/js",
    filename: "app.js"
  },

  resolve: {
    modulesDirectories: [ "node_modules", __dirname + "/web/static/js" ]
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["es2015", "react"]
      }
    },
    // {
    //   test: /\.css$/,
    //   loader: ExtractTextPlugin.extract("style", "css")
    // },
    { test: /\.css$/, exclude: /node_modules/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
    {
      test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
    }]
  },

  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([{ from: "./web/static/assets" }])
  ]
};
