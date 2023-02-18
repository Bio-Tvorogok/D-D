const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // inline map for ts debug mode (only dev)
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new ESLintPlugin(),
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Vishwas'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    mode: 'development',
};
