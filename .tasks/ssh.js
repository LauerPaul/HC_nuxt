const
fs = require('fs'),
gulp = require('gulp'),
GulpSSH = require('gulp-ssh')
 
const config = {
  host: '91.211.248.24',
  port: 22,
  username: 'sexmeet',
  password: 'sexmeet',
  // privateKey: fs.readFileSync('/Users/zensh/.ssh/id_rsa')
},

gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})
 
gulp.task('status', function (cb){
  gulpSSH.shell(['cd /home/sexmeet/www/nuxt.hearts-club.com/public_html', 'git status', 'git pull'], {filePath: 'shell.log'})
  .pipe(gulp.dest('../.log'))

  cb();
})
