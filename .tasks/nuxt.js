import gulp from 'gulp'
import { Nuxt, Builder } from 'nuxt'
import fs from 'fs'

const nuxt_ = new Nuxt();
// const paths_ = JSON.parse(fs.readFileSync('./paths.json'));

export function nuxt(cb) {
	gulp.task('generate', resolve => {
		nuxt_.generate()
	      .then(() => { console.log("Promise Resolved"); })
	      .catch(() => { console.log("Promise Rejected"); });
	  	resolve();
	});
    if(typeof(cb) == 'function') cb();
}