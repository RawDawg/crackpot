// ☱☲☴ Critical

var gulp            = require('gulp');
var config          = require('../config.json');
var critical        = require('critical').stream;

// Insert render blocking CSS in HTML files inline

gulp.task('critical', function () {
    return gulp.src(config.distDir + '**/*.html')
        .pipe(critical({
            inline: true,
            base: 'dist/',
            minify: true,
            width: 320,
            height: 480
        }))
        .pipe(gulp.dest(config.distDir));
});
