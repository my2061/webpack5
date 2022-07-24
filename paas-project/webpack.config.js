const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 8080,
    },
    output: {
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new ModuleFederationPlugin({
            name: "paas",
            filename: "paas-file-entry.js",
            exposes: {
                "./paasComp": "./src/paasComp.js"
            },
            shared: {
                jquery: {
                    singleton: true,//整个微前端项目全局唯一
               }
            }
        })
    ],
}