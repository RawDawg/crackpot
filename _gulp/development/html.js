// ☱☲☴ HTML

var gulp            = require('gulp');
var config          = require('../config.json');
var browserSync     = require('browser-sync');
var gutil           = require('gulp-util');
var plumber         = require('gulp-plumber');

// Watch all HTML files and refresh when something changes

gulp.task('html', function () {
    return gulp.src([config.srcDir + '**/*.html'])
        .pipe(plumber())
        .pipe(browserSync.reload({stream: true}))
        .on('error', gutil.log);
});
