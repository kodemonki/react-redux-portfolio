var path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const WorkboxPlugin = require("workbox-webpack-plugin");

const workboxPlugin1 = new WorkboxPlugin.GenerateSW({
  swDest: "sw.js",
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp("kodemonki.com"),
      handler: "cacheFirst"
    }
  ]
});

const WebpackPwaManifest = require("webpack-pwa-manifest");

const webpackPwaManifest = new WebpackPwaManifest({
  filename: "manifest.json",
  name: "kodemonki",
  short_name: "KM",
  description: "The portfolio of Tom Jane",
  theme_color: "#ff6600",
  background_color: "#ffffff",
  inject: true,

  icons: [
    {
      src: path.resolve("src/images/icon.jpg"),
      sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
    },
    {
      src: path.resolve("src/images/large-icon.jpg"),
      size: "1024x1024" // you can also use the specifications pattern
    }
  ]
});

module.exports = {
  output: {
    publicPath: "/"
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
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  plugins: [htmlWebpackPlugin, workboxPlugin1, webpackPwaManifest]
};
