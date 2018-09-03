/**
*   @version 1.0 beta
*   @module @/pages/index
*   @desc <strong>Index Page</strong>
*   @see ~/pages/index.vue
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

const data = {}

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
	*/
	components: {
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