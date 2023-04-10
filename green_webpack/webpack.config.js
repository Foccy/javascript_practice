const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",//production,development
  entry: {
    index: path.join(__dirname, "src", "index.js"),
    about: path.join(__dirname, "src", "about.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/, //노드모듈 하위탐색안함
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader:'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'images',
              /*   publicPath:'../dist' */
            }
          }
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //번들전 html
      filename: "./index.html", //번들후 html
      hash: true, //모든스크립트, css 캐시 무효화
      showErrors: true, //오류 html에 출력
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.html", //번들전 html
      filename: "./about.html", //번들후 html
      hash: true, //모든스크립트, css 캐시 무효화
      showErrors: true, //오류 html에 출력
      chunks: ["about"],
    }),

    new MiniCssExtractPlugin({
      filename: "./css/style.css", //번들후 css파일명
    }),
  ],
  
};