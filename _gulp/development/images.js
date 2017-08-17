// ☱☲☴ Images

var gulp            = require('gulp');
var config          = require('../config.json');
var cache           = require('gulp-cache');
var imagemin        = require('gulp-imagemin');

// Compress images & handle SVG files

gulp.task('images', function () {
    return gulp.src([config.srcDir + 'images/**/*.{png,jpg,svg}'])
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest(config.srcDir + 'images')
        );
});
