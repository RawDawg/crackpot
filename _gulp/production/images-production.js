// ☱☲☴ Images production

var gulp            = require('gulp');
var config          = require('../config.json');
var plumber         = require('gulp-plumber');

// Copy images into dist folder

gulp.task('images-production', function () {
    gulp.src([config.srcDir + 'images/**/*'])
        .pipe(plumber())
        .pipe(gulp.dest(config.distDir + 'images'));
});
