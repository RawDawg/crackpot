// ☱☲☴ Migrate

var gulp            = require('gulp');
var config          = require('../config.json');
var gulpIf          = require('gulp-if');
var plumber         = require('gulp-plumber');
var uglify          = require('gulp-uglify');
var useref          = require('gulp-useref');

// Copy everything, even invisible files but …
// … do not copy the JS plugins & settings and the SASS files

gulp.task('migrate', function () {
    gulp.src([
        config.srcDir + '**',
        '!' + config.srcDir + '**/*.html',
        '!' + config.srcDir + '{js/plugins,js/plugins/**}',
        '!' + config.srcDir + '{js/*.js,js/settings,js/settings/**}',
        '!' + config.srcDir + '{css/style.css,css/scss,css/scss/**}'
    ], {dot: true})
        .pipe(plumber())
        .pipe(gulp.dest(config.distDir));
    // Concatenate and inject a minified JS file
    gulp.src([config.srcDir + '**/*.html'])
        .pipe(plumber())
        .pipe(useref())
        // Minify only JS files
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest(config.distDir));
});
