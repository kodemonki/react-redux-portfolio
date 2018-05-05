const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  output:{
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.(s*)css$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlWebpackPlugin,new BundleAnalyzerPlugin()]
};
