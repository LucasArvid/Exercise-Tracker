const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/main.js',
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
         },
         {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
       ]
   },
   devServer: {
      port: 8081,
      open: true,
      hot: true,
      proxy: {
          "/api": "http://localhost:8080"
      },
      watchOptions:{
         aggregateTimeout: 300,
         poll: 100
      }
  },
   plugins:[
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ]
}