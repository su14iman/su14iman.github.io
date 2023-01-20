const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
  mode: "development",
  entry: "./js/app/index.js",
  devtool: "inline-source-map",
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "js"),
  },
};
