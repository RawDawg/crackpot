// ☱☲☴ Styles production

var gulp            = require('gulp');
var config          = require('../config.json');
var autoprefixer    = require('gulp-autoprefixer');
var CSSnano         = require('gulp-cssnano');
var sass            = require('gulp-sass');
var plumber         = require('gulp-plumber');
var concat          = require('gulp-concat');

// Compile and minify SCSS files for production

gulp.task('styles-production', function () {
    // The master SCSS file that imports everything
    return gulp.src(config.srcDir + '_scss/init.scss')
        .pipe(plumber())
        .pipe(sass({
            includePaths: [
                config.srcDir + '_scss'
            ]
        }))
        .pipe(autoprefixer(config.browserList))
        .pipe(concat('style.css'))
        .pipe(CSSnano({discardComments: {removeAll: true}}))
        .pipe(gulp.dest(config.distDir + 'css'));
});
