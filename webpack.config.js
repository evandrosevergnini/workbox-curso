const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 8091,
    open: "Google Chrome", // 'Google Chrome' on macOS, 'google-chrome' on Linux and 'chrome' on Windows
  },
  entry: {
    main: path.resolve(__dirname, "src", "main.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    assetModuleFilename: "assets/[name]-[hash:8][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /public/],
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Curso",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, "src/assets/images/logo-workbox.png"), // svg works too!
      mode: "webapp", // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
      devMode: "webapp", // optional can be 'webapp' or 'light' - 'light' by default
      prefix: "assets/pwa/", // Prefix path for generated assets
      //manifest: "./src/manifest.json",
      favicons: {
        appName: "Webpack Curso",
        appDescription: "App para Webpack Curso",
        developerName: "Evandro C. Severgnini",
        developerURL: "https://github.com/evandrosevergnini", // prevent retrieving from the nearest package.json
        background: "#ADD8E6",
        theme_color: "#1B305A",
        icons: {
          coast: false,
          yandex: false,
        },
      },
    }),
  ],
};
