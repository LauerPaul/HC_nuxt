/**
*   @version 1.0 beta
*   @module @/pages/index
*   @desc <strong>Index Page</strong>
*   @see ~/pages/index.vue
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

// Configs
import user_p_cnfg from '@/static/configs/pages/user_page.json'
import lcol_cnfg from '@/static/configs/left_column.json'
// Configs end

import leftColumn from '@/components/columns/left_column'
import rightColumn from '@/components/columns/right_column/profile'

const data = {
	/**
	* @typedef {Object} Data
	* 	@property {object} config - параметры страницы
	* 		@property {object} config.left_column_status - статус видимости левой колонки
	* 		@property {object} config.right_column_status - статус видимости левой колонки
	* 	@property {object} left_column_config - параметры левой колонки
	* 		@property {boolean} left_column_config.menu_status - статус видимости списка меню
	*/
	left_column_config: lcol_cnfg,
	config: user_p_cnfg,
}

/** Export component */
export default {
	// Set data
	data: function(){ return data },

	// Meta
	head() {
		return {
			// title: this.meta.title,
			// meta: [
				// {
					// hid: 'description',
					// name: 'description',
					// content: this.meta.description
				// }
			// ]
		}
	},

	/**
	* This page requires the components:<br>
	*
	*	> [Left column]{@link module:components/columns/left_column}
	*	> [Right column]{@link module:components/columns/right_column/profile}
	*/
	components: {
		'left-column': leftColumn,
		'right-column': rightColumn
	},

	// Created
	created: () => {
		// Запускаем таймер, чтоб знать, за какое время страница будет смонтирована
		console.time('CREATED_INDEX_PAGE')
	},

	// Middleware auth
	middleware: ['auth'],
	options: { auth: false},

	/**
	* @desc ▶ Hook reporting <br>
	* <strong style="color:red; font-size: 18px;">ⓘ</strong>
	*
	* @event module:@/pages/index~PAGE <strong>Index</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'@/pages/index\' -> mounted');

		if(this.$auth.user) this.$log.debug(this.$auth.user);
		
		// Вывод времени компиляции страницы
		console.timeEnd('CREATED_INDEX_PAGE')
	},

	// Methods
	methods: {}
}