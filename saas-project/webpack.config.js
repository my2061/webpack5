const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    plugin: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
}