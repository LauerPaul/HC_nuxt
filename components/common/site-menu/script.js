/**
* @vuedoc
* @module components/common/site-menu
* @see @/components/common/site-menu
*
* @version 1.0
* @desc Site menu
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import { mapState } from 'vuex'

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
	* @typedef {Object} Computed
	*	@property {object} notify - оповищения (из Store [LeftMenu]{@link module:store/left_menu})
	*	@property {object} listMenu - список меню (из Store [LeftMenu]{@link module:store/left_menu})
	*/
	computed: mapState('LeftMenu', [
    	'notify',
    	'listMenu'
	]),

	/**
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/common/site-menu~Compomemt <strong>Site menu</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'Right column\' (@/components/common/site-menu) -> mounted hook init');

	},
	/**
	* Компонент использует компоненты:
	*
	*/
	components: {
	},

	// Methods
	methods: methods,
}