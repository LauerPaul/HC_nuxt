/**
* @vuedoc
* @module components/columns/right_column/profile
* @see @/components/columns/right_column/profile
*
* @version 1.0
* @desc Right column profile
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import boardUserProfile from '@/components/boards/user_profile'
import boardUserGallery from '@/components/boards/gallery'
import boardWidget_MatchOfTheDay from '@/components/boards/widgets/match_of_the_day'

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
	* @event module:components/columns/right_column/profile~Compomemt <strong>Right column</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'Right column\' (@/components/columns/right_column/profile) -> mounted hook init');

	},
	/**
	* Компонент использует компоненты:
	*
	*	> [board User profile]{@link module:components/boards/user_profile}
	*	> [board User gallery]{@link module:components/boards/gallery}
	*	> [board widget - Match of the day]{@link module:components/boards/widgets/match_of_the_day}
	*/
	components: {
		'board-user-profile': boardUserProfile,
		'board-user-gallery': boardUserGallery,
		'board-widget-match-of-the-day': boardWidget_MatchOfTheDay
	},

	// Methods
	methods: methods,
}