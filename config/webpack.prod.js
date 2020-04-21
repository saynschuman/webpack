const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const paths = require("./path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const prodConfig = {
  entry: paths.entryMain,
  mode: "production",
  devtool: "inline-source-map",
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    path: paths.absolute.dist,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.(scss|sass)$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.module\.(scss|sass)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]-[local]-[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
