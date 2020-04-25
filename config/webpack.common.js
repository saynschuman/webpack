const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./path");
const webpack = require("webpack");

const commonConfig = {
  entry: ["react-hot-loader/patch", paths.entryMain],
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js",
    path: paths.absolute.dist,
    publicPath: "/",
  },
  resolve: {
    alias: {
      src: paths.absolute.src,
    },
    extensions: [".js", ".jsx", ".scss", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: paths.htmlTemplate }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { useBuiltIns: "usage", corejs: 3 }],
              "@babel/preset-react",
            ],
            plugins: ["react-hot-loader/babel"],
          },
        },
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};

module.exports = commonConfig;
