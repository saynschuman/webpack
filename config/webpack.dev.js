const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  devServer: {
    port: 3000,
    hot: true,
    stats: {
      modules: false,
    },
  },
  mode: "development",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
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

module.exports = t = merge(commonConfig, devConfig);
