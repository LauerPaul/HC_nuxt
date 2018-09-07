import fs from  'fs'
import gulp from 'gulp'
import if_ from 'gulp-if'
import sass from 'gulp-sass'
import notify from 'gulp-notify'
import rename from 'gulp-rename'
import plumber from 'gulp-plumber'
import changed from 'gulp-changed'
import filesize from 'gulp-filesize'
import prefix from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'

const paths_ = JSON.parse(fs.readFileSync('./.tasks/paths.json'));
const cnf = JSON.parse(fs.readFileSync('./.tasks/config.json'));

export function css_compile_min(){
	return gulp.src(paths_.scss.path)
                .pipe(plumber())
                .pipe(changed(paths_.dist + paths_.scss.out))
                .pipe(sass({
                    outputStyle: 'compressed',
                    precison: 3,
                    errLogToConsole: true
                }).on('error', sass.logError))
                .pipe(prefix())
                .pipe(rename({
                	suffix: '.min'
                }))
                .pipe(plumber.stop())
                .pipe(gulp.dest(paths_.dist + paths_.scss.out))
                .pipe(filesize())
                .pipe(notify("ready: <%= file.relative %>"));
}

export function css_compile (){
	gulp.src(paths_.scss.path)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(changed(paths_.dist + paths_.scss.out))
        .pipe(if_(cnf.scss.sourceMap, sourcemaps.init({loadMaps: true})))
        .pipe(sass({
                outputStyle: 'nested',
                precison: 3,
                errLogToConsole: true
        }).on('error', sass.logError))
        .pipe(prefix())
        .pipe(if_(cnf.scss.sourceMap, sourcemaps.write(paths_.scss.sourceMap, {sourceMappingURLPrefix: '/css'})))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths_.dist + paths_.scss.out))
        .pipe(filesize())
        .pipe(notify("ready: <%= file.relative %>"));
}

/** SCSS min */
export function styles(cb) {
    if(cnf.scss.min) css_compile_min();
    css_compile();
    if(typeof(cb) == 'function') cb();
}