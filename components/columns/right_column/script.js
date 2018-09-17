/**
* @vuedoc
* @module components/columns/right_column
* @see @/components/columns/right_column
*
* @version 1.0
* @desc Right column
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import boardUserProfile from '@/components/boards/user_profile'

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
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/columns/right_column~Compomemt <strong>Right column</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'Right column\' (@/components/columns/right_column) -> mounted hook init');

	},
	/**
	* Компонент использует компоненты:
	*
	*	> [board User profile]{@link module:components/boards/user_profile}
	*/
	components: {
		'board-user-profile': boardUserProfile
	},

	// Methods
	methods: methods,
}