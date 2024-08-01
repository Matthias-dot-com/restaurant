const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module :{
    rules : [
        new HtmlWebpackPlugin ({
            title : "Restaurant",
            template : "./src/index.html",
        })
    ]
  }
};
