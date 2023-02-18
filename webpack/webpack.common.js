const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/app/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'public', 'index.html'),
        }),
    ],
    output: {
        filename: 'bundle.js',
        // path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '',
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
};
