import gulp from 'gulp'
import git from 'gulp-git'
import log from 'gutil-color-log'

export function git(cb){
	console.log(' ');
    console.log('-----------------------------------------------------------------------------------');
    log('green', '->>>>>>> ✅ GIT [status] ');
    console.log('-----------------------------------------------------------------------------------');
	git.status(function (err, stdout) { if (err) throw err;	});
    git.push('origin', 'master', function (err) { if (err) throw err; });
    if(typeof(cb) == 'function') cb();
}