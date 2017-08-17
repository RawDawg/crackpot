// ☱☲☴ Build Task

var gulp            = require('gulp');
var config          = require('../config.json');
var notifier        = require('node-notifier');
var path            = require('path');

// Run deploy task,
// notify when finished

gulp.task('build', ['deploy'], function () {
    notifier.notify({
        title: 'Crackpot',
        subtitle: 'Site built in',
        message: config.distURL,
        open: config.distURL
        // icon: path.join(__dirname, 'dist/images/favicon/favicon.png') // Htf does this work!?
    });
    console.log('Done!');
});
