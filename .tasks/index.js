import gulp from 'gulp'
import { nuxt } from './nuxt'
import { styles } from './styles'
import { img }  from './images'
import { watch }  from './watch'

// export const build = gulp.series( scripts )
export const dev   = gulp.series( nuxt, gulp.parallel(styles, img), watch )

export default dev