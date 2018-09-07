import gulp from 'gulp'
import git from 'gulp-git'
import log from 'gutil-color-log'

gulp.task('git_push', function(){
	console.log(' ');
    console.log('-----------------------------------------------------------------------------------');
    log('green', '->>>>>>> ✅ GIT [git push]');
    console.log('-----------------------------------------------------------------------------------');

	return git.push('origin', 'master', function (err) { if (err) throw err; });
});

gulp.task('git_commit', function(){
	console.log(' ');
    console.log('-----------------------------------------------------------------------------------');
    log('green', '->>>>>>> ✅ GIT [git commit]');
    console.log('-----------------------------------------------------------------------------------');

	return gulp.src('./')
	    		.pipe(git.commit('initial commit'));
});

gulp.task('git_add', function(){
	console.log(' ');
    console.log('-----------------------------------------------------------------------------------');
    log('green', '->>>>>>> ✅ GIT [git add]');
    console.log('-----------------------------------------------------------------------------------');

	return gulp.src('./').pipe(git.add())
});

gulp.task('git_status', function(){
	console.log(' ');
    console.log('-----------------------------------------------------------------------------------');
    log('green', '->>>>>>> ✅ GIT [git status]');
    console.log('-----------------------------------------------------------------------------------');

	return	git.status({args: '--porcelain'}, function (err, stdout) { if (err) throw err; });
});

gulp.task('deploy', gulp.series('git_status', 'git_add', 'git_commit', 'git_status', 'git_push'));



	// })
	// // if(git.status(function (err, stdout) { if (err) throw err;	})){
	// // 	gulp.src('./').pipe(git.add())
	// // 	git.status(function (err, stdout) { if (err) throw err;	})
	// // }
	// 	// git.status(function (err, stdout) { if (err) throw err;	})
 //    	// .push('origin', 'master', function (err) { if (err) throw err; });
	// cb();
