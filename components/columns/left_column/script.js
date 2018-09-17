/**
* @vuedoc
* @module components/columns/left_column
* @see @/components/columns/left_column
*
* @version 1.0
* @desc Left column
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import siteMenu from '@/components/common/site-menu'

const data = {
	/**
	* @typedef {Object} Data
	* 	@property {boolean} search_status - статус видимости строки поиска
	*/
}

const methods = {
}

/** Export component */
export default {
	// Set data
	data: function() { return data },

	/**
	* @typedef {Object} Props
	* 	@property {object} config - Параметры компонента
	* 		@property {boolean} config.menu_status - Статус видимости списка меню
	*/
	props: [
		'config'
	],

	/**
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/columns/left_column~Compomemt <strong>Default</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'Left column\' (@/components/common/left_column) -> mounted hook init');

	},
	/**
	* Компонент использует компоненты:
	*
	* > [Site menu]{@link module:components/common/site-menu}
	*/
	components: {
		'site-menu': siteMenu
	},

	// Methods
	methods: methods,
}