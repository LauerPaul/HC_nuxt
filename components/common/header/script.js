/**
* @vuedoc
* @module components/common/header
* @see @/components/common/header
*
* @version 1.0
* @desc Header
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import { mapState } from 'vuex'

import headerSearch from '@/components/common/header-search-line'

const data = {
	/**
	* @typedef {Object} Data
	* 	@property {boolean} search_status - статус видимости строки поиска
	*/
	search_status: true, 
}

const methods = {
}

/** Export component */
export default {
	// Set data
	data: function() { return data },

	/**
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/common/header~Compomemt <strong>Default</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('layout \'default\' (@/components/common/header) -> mounted hook init');

	},
	/**
	* Компонент использует компоненты:
	*
	*	> [Header]{@link module:components/common/header-search-line}
	*/
	components: {
		'search-line': headerSearch
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

	// Methods
	methods: methods,
}