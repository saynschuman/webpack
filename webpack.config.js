const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  devtool: "inline-source-map",
  entry: ["react-hot-loader/patch", "./src/index.js"],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/template.html" })],
  devServer: {
    port: 3000,
    hot: true,
  },
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
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.(scss|sass)$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.module\.(scss|sass)$/i,
        use: [
          "style-loader",
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

module.exports = config;
