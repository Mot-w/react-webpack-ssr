let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let devServer = require('webpack-dev-server');

module.exports = {
    entry: {
        index: './client/main.jsx'
    },

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist/src')
    },

    module: {
        loaders: [
            {
                test: /.\jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /.\less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=8197&name=images/[name].[hash:4].[ext]'
            }
        ]
    },

    plugins: [
        //new ExtractTextPlugin('style.[hash].css'),  //提取css文件单独打包
        new HtmlWebpackPlugin({
            title: 'Mot’s Blog',
            template: './client/template/base.html'
        })
    ],

    devServer: {
        port: 9000,
        inline: true
    }
}