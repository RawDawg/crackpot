// ☱☲☴ Clean

var gulp            = require('gulp');
var config          = require('../config.json');
var del             = require('del');

// Clean the dist directory

gulp.task('clean', function () {
    return del([config.distDir + '*', config.distDir + '.*', config.distDir + '*/**']);
});
