let HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    plugins: [
        //以index.html作为模板，并向其中插入打包后的bundle.js文件，然后保存到目标路径下
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};