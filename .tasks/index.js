import gulp from 'gulp'
import { styles } from './styles'
import { img }  from './images'
import { watch }  from './watch'
import { img_del }  from './del'
import './git'

export const dev   = gulp.series( gulp.parallel(styles, img), watch )
export const build = gulp.series( gulp.parallel(styles, img) )

export default dev
