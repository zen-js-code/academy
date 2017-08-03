'use strict';

const PATH = require('path');

const gulp = require('gulp');
const del = require('del');

const md = require('../plugins/md/');

const SRC_CONTENT = 'content/**/*.md';
const DEST_CONTENT = 'src/client/modules/';

function build() {
    return gulp.src(SRC_CONTENT)
        .pipe(md())
        .pipe(gulp.dest(DEST_CONTENT));
}

function watch() {
    return gulp.watch(SRC_CONTENT, build);
}

gulp.task('content:build', build);
gulp.task('content:watch', watch);
