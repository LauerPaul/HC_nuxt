import fs from  'fs'
import gulp    from 'gulp'
import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'
import notify from 'gulp-notify'
import cache from 'gulp-cache'
import del from 'del'

const paths_ = JSON.parse(fs.readFileSync('./.tasks/paths.json'));

export function img_export(){
	gulp.src(paths_.app + paths_.img.path)
        .pipe(cache(imagemin({
        	// optimizationLevel: 3,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        })))
        .pipe(gulp.dest(paths_.dist + paths_.img.out))
        .pipe(notify("ready: <%= file.relative %>"));
}

export function img(cb) {
	img_export();
    if(typeof(cb) == 'function') cb();
}
 
