var path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const WorkboxPlugin = require("workbox-webpack-plugin");

const workboxPlugin = new WorkboxPlugin.GenerateSW({
  swDest: "sw.js",
  clientsClaim: true,
  skipWaiting: true
  /*runtimeCaching: [
    {
      urlPattern: new RegExp("https://"),
      handler: "cacheFirst"
    }
  ]*/
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
      sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
      destination: path.join("images", "icons")
    },
    {
      src: path.resolve("src/images/large-icon.jpg"),
      size: "1024x1024", // you can also use the specifications pattern
      destination: path.join("images", "icons")
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
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "images/" }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
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
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  plugins: [htmlWebpackPlugin, workboxPlugin, webpackPwaManifest]
};
