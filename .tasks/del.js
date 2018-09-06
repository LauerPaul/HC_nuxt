import fs from  'fs'
import gulp    from 'gulp'
import del from 'del'

const paths_ = JSON.parse(fs.readFileSync('./.tasks/paths.json'));

export function img_del(cb){
    del([paths_.app + paths_.img.path + '*']).then(paths => {
        console.log('-----------------------------------------------------------------------------------');
        console.log('Deleted files and folders:\n', paths.join('\n'));
        console.log('-----------------------------------------------------------------------------------');
    });
 
    if(typeof(cb) == 'function') cb();
} 
