const { webpack } = require("webpack")
const path = require("path")
const HtmlWbepackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

//自带模块，解决路径问题
const config = {
    //entry入口文件
    entry: path.resolve(__dirname, 'src/main.js'),
    //dirname,当前目录，后面跟文件当前所在目录,起拼接作用
    output: {
        //出口文件
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        //打包的文件名
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.(png|jpg|svg|gif|jpeg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWbepackPlugin({
            title: "webpack-vue",
            template: path.join(__dirname, "public/index.html")
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        port: 8080,
        host: "localhost",
        overlay: {
            errors: true
        }
    },
    mode: 'development'
    //模式开发模式
}
module.exports = config;
//导出