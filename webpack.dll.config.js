'use strict';

const PATH = require("path");
const AssetsPlugin = require('assets-webpack-plugin');

const webpack = require("webpack");

const ROOT = '.';

const CACHE_DIR_PATH = PATH.resolve(__dirname, ROOT, '.cache/');
const NODE_MODULES = PATH.resolve(__dirname, ROOT, 'node_modules/');

const JS_DIR_NAME = 'js';
const PUBLIC_DIR = PATH.resolve(__dirname, ROOT, 'dist/');
const JS_ASSETS_DIR =  PATH.resolve(PUBLIC_DIR, `${JS_DIR_NAME}/`);

const ASSETS_FILE_NAME = 'assets.json';
const ASSETS_DIR = PATH.resolve(ROOT, PUBLIC_DIR);

const config = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-hot-loader',
            'react-router',
            'react-router-dom',
            'warning'
        ]
    },
    output: {
        path: JS_ASSETS_DIR,
        filename: '[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new AssetsPlugin({
            filename: ASSETS_FILE_NAME,
            path: ASSETS_DIR
        }),
        new webpack.DllPlugin({
            name: '[name]',
            path: PATH.resolve(JS_ASSETS_DIR, '[name].manifest.json'),
        })
    ],
};

module.exports = config;
