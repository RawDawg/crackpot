// ☱☲☴ The watcher

var gulp            = require('gulp');
var config          = require('../config.json');
var browserSync     = require('browser-sync');

// Watch all HTML, JS and CSS files and the images folder

gulp.task('watch', function () {
    gulp.watch([config.srcDir + '**/*.html', config.srcDir + '**/*.php'], ['html'], browserSync.reload); // This always reports changes in multiple HTML files wtf?
    gulp.watch(config.srcDir + '_scss/**', ['styles']);
    gulp.watch([config.srcDir + 'js/plugins/**/*', config.srcDir + 'js/settings/**/*'], ['scripts-inject', 'js-lint']);
    gulp.watch([config.srcDir + 'images/**/*.{png,jpg,gif,svg}'], ['images']);
});
