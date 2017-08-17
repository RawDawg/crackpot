// ☱☲☴ BrowserSync

var gulp            = require('gulp');
var config          = require('../config.json');
var browserSync     = require('browser-sync');

gulp.task( 'browserSync', function() {
    browserSync.init( {
        //open: true,
        server: {baseDir: config.srcDir},
        options: {
            reloadDelay: 250
        }
    });
});
