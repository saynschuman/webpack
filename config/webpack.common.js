const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./path");

const commonConfig = {
  entry: ["react-hot-loader/patch", paths.entryMain],
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js",
    path: paths.absolute.dist,
    publicPath: "/",
  },
  plugins: [new HtmlWebpackPlugin({ template: paths.htmlTemplate })],
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
        test: /\.(png|jpe?g|gif)$/i,
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
