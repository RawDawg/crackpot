// ☱☲☴ JS inject

var gulp            = require('gulp');
var config          = require('../config.json');
var inject          = require('gulp-inject');
var jshint          = require('gulp-jshint');

// Inject JS plugins and settings

gulp.task('scripts-inject', function () {
    return gulp.src(config.srcDir + '/**/*.html')
    // Inject all *.js files found in js/vendor, js/plugins and js/settings
    // Do not inject jQuery and modernizr though, they get the special treatment
    // Lint JS files and report errors
        .pipe(inject(
            gulp.src([
                config.srcDir + 'js/vendor/**/*.js',
                config.srcDir + 'js/plugins/**/*.js',
                config.srcDir + 'js/settings/**/*.js',
                '!' + config.srcDir + 'js/vendor/**/*jquery*.js',
                '!' + config.srcDir + 'js/vendor/**/*modernizr*.js'], {read: false}), {relative: true}))
        .pipe(gulp.dest(config.srcDir));
});
