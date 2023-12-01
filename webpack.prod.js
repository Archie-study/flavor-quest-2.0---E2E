const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new InjectManifest({
            swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
            swDest: './sw.bundle.js',
            maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        }),
    ],
    minimizer: [
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                    plugins: [['mozpeg', { quality: 55, progressive: true }]],
                },
            },
        }),
    ],
});
