/**
*	@version 1.0 beta
*	@module @/layouts/default
*	@desc <strong>Layout Default</strong>
*	@see ~/layouts/default
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

import { mapState } from 'vuex'

const data =  {
	/**
	* @typedef {Object} Data
	*	@property {boolean} headerMenu_status - Header menu visibility status
	*/
}

/** Export component */
export default  {
	
	// Set data
	data: function(){ return data },

	/**
	* This layout requires the components: 
	*/
	components: {
	},

	/**
	* @typedef {Object} Computed
	*	@property {boolean} logo - Логотип сайта (из Store Site)
	*	@property {boolean} logo_alt - alt логотипа сайта (из Store Site)
	*/
	computed: mapState('Site', [
    	'logo',
    	'logo_alt'
	]),

	// Created
	created: () => {
		// Запускаем таймер, чтоб знать, за какое время шаблон будет смонтирован
		console.time('Created_Default-layout')
	},

	/**
	* @description ▶ Hook reporting <br>
	* ⓘ
	*
	* @event module:@/layouts/default~LAYOUT <strong>Default</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('layout \'default\' -> mounted');

		// Вывод времени компиляции шаблона
		console.timeEnd('Created_Default-layout')
	},

	// Methods
	methods: {
	}
}