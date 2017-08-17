// ☱☲☴ Spark Master Task

var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence').use(gulp);

// Start web server,
// sync browsers,
// compress all images,
// inject scripts,
// handle SCSS files

gulp.task('default', gulpSequence(['scripts-inject', 'styles', 'images'], ['browserSync', 'watch']));
