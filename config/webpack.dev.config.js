let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let devServer = require('webpack-dev-server');
let webpack = require('webpack');

module.exports = {
    entry: {
        index: './client/main.js'
    },

    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, '../dist/src')
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=8197&name=images/[name].[hash:4].[ext]'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: ['url-loader?name=fonts/[name].[hash:4].[ext]']
            }
        ]
    },

    plugins: [
        //new ExtractTextPlugin('style.[hash].css'),  //提取css文件单独打包
        new HtmlWebpackPlugin({
            title: 'Mot’s Blog',
            template: './client/template/base.html'
        }),
        //new webpack.NamedModulesPlugin(),
        //new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        port: 9000
    }    
}