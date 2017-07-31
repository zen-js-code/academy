'use strict';

const gulp = require('gulp');
const dir = require('require-dir');

dir('build/tasks/');

const build = gulp.series(
    'clean',
    'content:build'
);

const watch = gulp.parallel(
    'content:watch'
);

gulp.task('build', gulp.series(build));
gulp.task('watch', gulp.series(build, watch));
