'use strict';

const gulp = require('gulp');
const webpack = require('webpack');

const DLL_CONFIG = require('../config/webpack.dll.config');
const APP_CONFIG = require('../config/webpack.app.config');

function handleStats(err, stats, cb) {
    if (!err) {
        const out = stats.toString('minimal');
        console.log(out);
        cb(null);
    } else {
        console.error(err);
        cb(err);
    }
}

function compile(cb) {
    const compiler = webpack(CONFIG);

    compiler.run((err, stats) => handleStats(err, stats, cb));
}

function watch(cb) {
    const compiler = webpack(CONFIG);
    const watchConfig = {ignored: [/node_modules/, CONFIG.context]};

    compiler.watch(watchConfig, (err, stats) => handleStats(err, stats, cb));
}

gulp.task('comp:watch', watch);
gulp.task('comp:build', compile);
