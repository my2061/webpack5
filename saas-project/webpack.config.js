const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 9000,
    },
    output: {
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new ModuleFederationPlugin({
            remotes: {
                paas: "paas@http://localhost:8080/paas-file-entry.js"
            },
            shared: {
                jquery: {
                    singleton: true,//整个微前端项目全局唯一
               }
            }
        })
    ],
}