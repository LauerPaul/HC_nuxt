import gulp from 'gulp'
import git from 'gulp-git'
import log from 'gutil-color-log'

export function git_status(cb){
	console.log(' ');
    console.log('-----------------------------------------------------------------------------------');
    log('green', '->>>>>>> ✅ GIT [status] ');
    console.log('-----------------------------------------------------------------------------------');

	git.status(function (err, stdout) {
		if (err) throw err;
	});
    
    if(typeof(cb) == 'function') cb();
}

export function git_add(cb){
	return gulp.src('./')
		.pipe(git.add());
}

export function git_commit(cb){
	let newVersion;
	function computeNewVersion() { 
		Date.prototype.yyyymmdd = function() {
			var mm = this.getMonth() + 1;
			var dd = this.getDate();

			return [this.getFullYear()+'-',
			      (mm>9 ? '' : '0') + mm+'-',
			      (dd>9 ? '' : '0') + dd
			     ].join('');
		};

		var date = new Date();
		var time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
		newVersion = date.yyyymmdd();
		newVersion += ' (' + time + ')';
	}
	
	return gulp.src('./')
			.pipe(computeNewVersion())
			.pipe(git.commit(() => `gulp-git commit [${newVersion}]`));
}