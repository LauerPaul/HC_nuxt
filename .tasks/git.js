import gulp from 'gulp'
import git from 'gulp-git'
import log from 'gutil-color-log'

gulp.task('git_push', function(cb){
	console.log(' ');
    console.log('-----------------------------------------------------------------------------------');
    log('green', '->>>>>>> ✅ GIT [git push]');
    console.log('-----------------------------------------------------------------------------------');

	git.push('origin', 'master', function (err) { if (err) throw err; });
	cb();
});

gulp.task('git_commit', function(cb){
	console.log(' ');
    console.log('-----------------------------------------------------------------------------------');
    log('green', '->>>>>>> ✅ GIT [git commit]');
    console.log('-----------------------------------------------------------------------------------');

	gulp.src('./').pipe(git.commit('gulp-git commit'));
	cb();
});

gulp.task('git_add', function(cb){
	console.log(' ');
    console.log('-----------------------------------------------------------------------------------');
    log('green', '->>>>>>> ✅ GIT [git add]');
    console.log('-----------------------------------------------------------------------------------');

	gulp.src('./').pipe(git.add())
	cb();
});

gulp.task('git_status', function(cb){
	console.log(' ');
    console.log('-----------------------------------------------------------------------------------');
    log('green', '->>>>>>> ✅ GIT [git status]');
    console.log('-----------------------------------------------------------------------------------');

	git.status(function (err, stdout) { if (err) throw err; });
	cb();
});