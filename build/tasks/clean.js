'use strict';

const gulp = require('gulp');
const del = require('del');

const DEST = ['src/client/modules/content/']

function clean() {
    return del(DEST);
}

gulp.task('clean', clean);
