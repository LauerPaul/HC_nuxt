import gulp from 'gulp'
import { styles } from './styles'
import { img }  from './images'
import { watch }  from './watch'
import { img_del }  from './del'
import { git }  from './git'

export const dev   = gulp.series( gulp.parallel(styles, img), watch )
export const build = gulp.series( gulp.parallel(styles, img) )
export const deploy = gulp.series( gulp.parallel(git) )

export default dev