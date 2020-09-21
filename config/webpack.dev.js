const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.config.js');


module.exports = merge(common, {
    mode: 'development',
    entry: {
        main: [
            'webpack-hot-middleware/client?reload=true',
            'react-hot-loader/patch',
            path.resolve(__dirname, '../src/index.js')
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        publicPath: '/',
        overlay: true,
        hot: true,
        host: 'localhost'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Dotenv({
            path: path.resolve(__dirname, '../.env.dev')
        })
    ]
});
