const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[hash]-[name]-bundle.js"
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
            },
            {
                test: /\.(jpg|jpeg|gif|svg|png)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack-vue",
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: './dist',
        port: 4040,
        host: 'localhost',
        overlay: {
            errors: true
        }
    },
    devtool: 'inline-source-map',
    mode: 'development'
}