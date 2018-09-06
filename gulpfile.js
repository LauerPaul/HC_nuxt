var gulp = require('gulp'),
    watch = require("gulp-watch"),
    if_ = require('gulp-if'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    filesize = require('gulp-filesize'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    fs = require('fs'),
    useref = require('gulp-useref'),
    cnf = JSON.parse(fs.readFileSync('./config.json'));

/**
 * [Tasks]
*/

/** default task */
gulp.task('default',
    [   
        'scss',
        'images',
    ],
function () {
    if(cnf.prop.css.min){
        gulp.watch(cnf.path.app + cnf.path.watch.scss, ['scss_min']);
    } else {
        gulp.watch(cnf.path.app + cnf.path.watch.scss, ['scss']);
    }
    gulp.watch(cnf.path.app + cnf.path.watch.images, ['images']);
    console.log("watch task init success...");
});

/** _init_ task */
gulp.task('_init_', ['default'], function () {
    console.log("task init success...");
});

/** [Task scss] */

/** SCSS */
gulp.task('scss', ['scss_min'], function () {
    return gulp.src(cnf.path.app + cnf.path.css.in)
                .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
                .pipe(if_(cnf.prop.css.sourcemap, sourcemaps.init()))
                    .pipe(sass({
                        outputStyle: 'nested',
                        precison: 3,
                        errLogToConsole: true
                    }).on('error', sass.logError))
                .pipe(if_(cnf.prop.css.sourcemap, sourcemaps.write(cnf.path.css.sourcemap)))
                .pipe(plumber.stop())
                .pipe(gulp.dest(cnf.path.dst + cnf.path.css.out))
                // .pipe(filesize())
});

/** SCSS min */
gulp.task('scss_min', function () {
    if(cnf.prop.css.min){
        return gulp.src(cnf.path.app + cnf.path.css.in)
                    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
                    .pipe(if_(cnf.prop.css.sourcemap, sourcemaps.init()))
                        .pipe(sass({
                            outputStyle: 'compressed',
                            precison: 3,
                            errLogToConsole: true
                        }).on('error', sass.logError))
                        .pipe(prefix())
                        .pipe(rename('styles.min.css'))
                    .pipe(if_(cnf.prop.css.sourcemap, sourcemaps.write(cnf.path.css.sourcemap)))
                    .pipe(plumber.stop())
                    .pipe(gulp.dest(cnf.path.dst + cnf.path.css.out))
                    // .pipe(filesize())
    }
});

/**
 * [Task images]
*/

/** Images */
gulp.task('images', function () {
    gulp.src(cnf.path.app + cnf.path.images.in)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        })))
        .pipe(plumber.stop())
        .pipe(gulp.dest(cnf.path.dst + cnf.path.images.out))
});
