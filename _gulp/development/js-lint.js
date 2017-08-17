// ☱☲☴ JS linting

var gulp            = require('gulp');
var config          = require('../config.json');
var jshint          = require('gulp-jshint');
var stylish         = require('jshint-stylish');

gulp.task('js-lint', function () {
    return gulp.src([config.srcDir + 'js/settings/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});
