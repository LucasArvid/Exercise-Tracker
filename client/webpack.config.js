const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   module: {
      rules: [
         {
           test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: {
             loader: "babel-loader"
           }
         }
       ]
   },
   devServer: {
      port: 8081,
      open: true,
      proxy: {
          "/api": "http://localhost:8080"
      }
  },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}