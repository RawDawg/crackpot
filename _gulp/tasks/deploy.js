// ☱☲☴ Deploy Task

var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence').use(gulp);
var config          = require('../config.json');

// Clean dist folder,
// create folder structure,
// inject a minimized main JS file,
// handle and minimize SCSS files,
// insert critical CSS inline,
// minimize HTML files,

gulp.task('deploy', function (cb) {
    console.log('Putting everything together …');
    gulpSequence('clean', 'scaffold', ['migrate', 'styles-production', 'images-production'], 'critical', 'html-min')(cb);
});
