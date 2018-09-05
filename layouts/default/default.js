/**
*	@version 1.0 beta
*	@module layouts/default
*	@desc <strong>Layout Default</strong>
*	@see @/layouts/default
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

import header from '@/components/common/header'

const data =  {
	/**
	* @typedef {Object} Data
	*	@property {boolean} 
	*/
}

/** Export component */
export default  {
	
	// Set data
	data: function(){ return data },

	/**
	* Шаблон использует компоненты:
	*	
	*	> [Header]{@link module:components/common/header}
	*/
	components: {
		'module-header': header
	},

	// Created
	created: () => {
		// Запускаем таймер, чтоб знать, за какое время шаблон будет смонтирован
		console.time('Created_Default-layout')
	},

	/**
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:layouts/default~LAYOUT <strong>Default</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('layout \'default\' (@/layouts/default) ->  mounted hook init');

		// Вывод времени компиляции шаблона
		console.timeEnd('Created_Default-layout')
	},

	// Methods
	methods: {
	}
}