const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // Add this line


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/", // Add this line
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    alias: {
      path: path.resolve(__dirname, "./src/atoms"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, ".", "index.html"),
    }),
    new webpack.DefinePlugin({ // Add this block
      'process.env.CONTENTFUL_BLOG_ARTICLE_ID_20231903': JSON.stringify(process.env.CONTENTFUL_BLOG_ARTICLE_ID_20231903),
      'process.env.CONTENTFUL_BLOG_ARTICLE_TOKEN_20231903': JSON.stringify(process.env.CONTENTFUL_BLOG_ARTICLE_TOKEN_20231903),
      'process.env.CONTENTFUL_COMMENTS_ACCESS_TOKEN': JSON.stringify(process.env.CONTENTFUL_COMMENTS_ACCESS_TOKEN),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "."),
    port: 3000,
    open: true,
  },
};
