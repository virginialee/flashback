var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [
    "whatwg-fetch",
    "./web/static/css/app.css",
    "./web/static/js/app.js"
  ],

  output: {
    path: "./priv/static/js",
    filename: "app.js"
  },

  resolve: {
    modules: [ "node_modules", __dirname + "/web/static/js" ]
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

    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    },

    {
      test: /\.svg$/,
      loader: 'babel-loader?presets[]=es2015,presets[]=react!svg-react-loader'
    }]
  },

  plugins: [
    new CopyWebpackPlugin([{ from: "./web/static/assets" }])
  ]
};
