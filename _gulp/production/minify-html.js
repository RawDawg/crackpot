// ☱☲☴ Minify HTML

var gulp            = require('gulp');
var config          = require('../config.json');
var HTMLmin         = require('gulp-htmlmin');

// Minify all HTML files,
// remove comments,
// minify inline JS

gulp.task('html-min', function () {
    return gulp.src(config.distDir + '**/*.html')
        .pipe(HTMLmin({
            collapseWhitespace: true,
            processConditionalComments: true,
            removeComments: true,
            minifyJS: true
        }))
        .pipe(gulp.dest(config.distDir));
});
