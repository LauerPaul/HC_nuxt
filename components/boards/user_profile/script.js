/**
* @vuedoc
* @module components/boards/user_profile
* @see @/components/boards/user_profile
*
* @version 1.0
* @desc User profile
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import { mapState } from 'vuex'

const data = {
	/**
	* @typedef {Object} Data
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
	*	@property {object} avatar - ссылка на avatar пользователя (из Store [UserData]{@link module:store/userData})
	*	@property {object} fullName - полное имя пользователя (из Store [UserData]{@link module:store/userData})
	*	@property {object} deviceType - тип оборудования, с которого пользователь пользуется ресурсом на данный момент (mobil|computer|tablet) (из Store [UserData]{@link module:store/userData})
	*	@property {object} age - возраст пользователя (из Store [UserData]{@link module:store/userData})
	*	@property {object} zodiac - знак зодиака пользователя (из Store [UserData]{@link module:store/userData})
	*	@property {object} country - страна пользователя (из Store [UserData]{@link module:store/userData})
	*	@property {object} city - город пользователя (из Store [UserData]{@link module:store/userData})
	*	@property {array} lookingFor - массив, кого ищет пользователь (из Store [UserData]{@link module:store/userData})
	*	@property {array} purposes -массив целей знакомства на сайте (из Store [UserData]{@link module:store/userData})
	*/
	computed: mapState('UserData', [
    	'avatar',
    	'fullName',
    	'deviceType',
    	'age',
    	'zodiac',
    	'country',
    	'city',
    	'lookingFor',
    	'purposes'
	]),

	/**
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/boards/user_profile~Compomemt <strong>Board User profile</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'Board User profile\' (@/components/boards/user_profile) -> mounted hook init');

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