// ☱☲☴ Styles

var gulp            = require('gulp');
var config          = require('../config.json');
var autoprefixer    = require('gulp-autoprefixer');
var browserSync     = require('browser-sync');
var concat          = require('gulp-concat');
var gutil           = require('gulp-util');
var plumber         = require('gulp-plumber');
var sass            = require('gulp-sass');
var sourceMaps      = require('gulp-sourcemaps');

gulp.task('styles', function () {
    // The master SCSS file that imports everything
    return gulp.src(config.srcDir + '_scss/init.scss')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourceMaps.init())
        .pipe(sass({
            errLogToConsole: true,
            includePaths: [config.srcDir + '_scss/']
        }))
        .pipe(autoprefixer(config.browserList))
        .on('error', gutil.log)
        .pipe(concat('style.css'))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(config.srcDir + 'css'))
        .pipe(browserSync.reload({stream: true}));
});
