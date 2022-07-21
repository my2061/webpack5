
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    output: {
        filename: "[name].[hash:5].js",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
    ]
}