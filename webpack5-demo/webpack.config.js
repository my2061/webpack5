
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
    mode: "development",
    cache: {
        type: "filesystem", //缓存到内存还是硬盘中 默认为内存memory
        cacheDirectory: path.resolve(__dirname, '.temp_cache'), //缓存保存的位置
    },
    output: {
        filename: "[name].[hash:5].js",
				clean: true,
        assetModuleFilename: "assets/[hash:6][ext]",	//用来配置资源模块输出的位置以及文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
    ],
    experiments: {
        topLevelAwait: true,
    },
    module: {
        rules: [
 
            {
                test: /\.png/,          //相当于4.x版本使用的file-loader
                type: "asset/resource", //将png图片使用文件的方式打包
            },
            {
                test: /\.txt/,
                type: "asset/source",   //将文件内容原封不动的放到asset中
            },
            {
                test: /\.jpg/,          //相当于4.x版本的url-loader
                type: "asset/inline",   //jpg文件都处理成base64方式存储
            },
            {
                test: /\.gif/,
                type: "asset",                  
                generator: {
                    filename: "gif/[hash:6][ext]",   //如果处理出来的是文件存放位置命名规则是什么，会覆盖上面assetModuleFilename配置项
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024,  //如果文件尺寸小于4kb那么使用base64的方式，大于使用文件
                    }
                }
            },
        ]
    }
}