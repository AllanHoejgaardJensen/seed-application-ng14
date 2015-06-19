/*jslint node: true, regexp: true */

'use strict';

var gulp = require('gulp'),
    appcache = require('gulp-appcache'),
    replace = require('gulp-replace');

// Creates HTML5 AppCache manifest
gulp.task('appcache', ['build'], function () {
    gulp.src(['target/dist/**/*'])
        .pipe(appcache({
            filename: 'app.manifest',
            exclude: ['app.manifest', 'index.html'],
            timestamp: true
        }))
        .pipe(gulp.dest('target/dist'));
    gulp.src(['target/dist/index.html'])
        .pipe(replace(/<html /, '<html manifest="app.manifest" '))
        .pipe(gulp.dest('target/dist'));
});

gulp.task('dist', ['appcache']);
