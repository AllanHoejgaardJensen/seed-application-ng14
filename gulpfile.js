/*jslint node: true */

'use strict';

var gulp = require('gulp');

// Set the config to use across the gulp build
gulp.config = {
    module: 'seed'
};

// Require all our gulp files, which each register their tasks when called
require('require-dir')('./gulp');

// Register our default task
gulp.task('default', ['bower', 'js', 'build-styles', 'fonts', 'server', 'proxy', 'test', 'watch']);
gulp.task('dist:serve', ['dist', 'server:dist']);
