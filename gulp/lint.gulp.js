/*jslint node: true */

'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    fs = require('fs'),
    srcFiles = ['app/**/*.js', 'gulp/*.js', 'gulpfile.js', '!app/bower_components/**/*', '!app/patch/**/*'];

// Runs ESLint
gulp.task('lint', function () {
    return gulp.src(srcFiles)
        .pipe(eslint())
        .pipe(eslint.format());
});

// Runs ESLint with Checkstyle-formatted output
gulp.task('lint-checkstyle', function () {
    var out;
    if (!fs.existsSync('target')) {
        fs.mkdirSync('target');
    }
    out = fs.createWriteStream('target/lint-result.xml');
    return gulp.src(srcFiles)
        .pipe(eslint())
        .pipe(eslint.format('checkstyle', out));
});
