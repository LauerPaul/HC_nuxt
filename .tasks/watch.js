import gulp from 'gulp'
import fs from  'fs'
import notify from 'gulp-notify'
import log from 'gutil-color-log'

import { css_compile as css }  from './styles'
import { css_compile_min as css_min }  from './styles'
import { img_export as images }  from './images'

const cnf = JSON.parse(fs.readFileSync('./.tasks/config.json'));
const paths_ = JSON.parse(fs.readFileSync('./.tasks/paths.json'));

export function watch(cb) {
    /* Scss */
    if(cnf.scss.watch) {
        gulp.watch(paths_.app + paths_.scss.watch, { passthrough: true, deep: true })
        .on('change', function(path, stats) {
            console.log(' ');
            console.log('-----------------------------------------------------------------------------------');
            log('green', '->>>>>>> ✅ Watch [scss]: ' + path);
            console.log('-----------------------------------------------------------------------------------');
            notify("[SCSS] - Watch start...");
            if(cnf.scss.min) css_min();
            css();
        }).on('unlink', function(path, stats) {log('green', path);});
    }

    /* Images */
    if(cnf.img.watch) {
        gulp.watch(paths_.app + paths_.img.watch, { passthrough: true, deep: true })
        .on('change', function(path, stats) {
            console.log(' ');
            console.log('-----------------------------------------------------------------------------------');
            log('green', '->>>>>>> ✅ Watch [images]: ' + path);
            console.log('-----------------------------------------------------------------------------------');
            notify("[IMAGES] - Watch start...");
            images();
            del([paths_.app + paths_.img.path + '*']).then(paths => {
                console.log('-----------------------------------------------------------------------------------');
                console.log('Deleted files and folders:\n', paths.join('\n'));
                console.log('-----------------------------------------------------------------------------------');
            });
        }).on('unlink', function(path, stats) {log('green', path);});
    }

    if(typeof(cb) == 'function') cb();
}
