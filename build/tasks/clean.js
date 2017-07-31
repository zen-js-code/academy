'use strict';

const gulp = require('gulp');
const del = require('del');

const DEST = ['dist/']

function clean() {
    return del(DEST);
}

gulp.task('clean', clean);
