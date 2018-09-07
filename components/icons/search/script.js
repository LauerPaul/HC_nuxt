/**
* @vuedoc
* @module components/icons/search
* @see @/components/icons/search
*
* @version 1.0
* @desc Icon search
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/


const data = {
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
	* @event module:components/icons/search~Compomemt <strong>Header search line</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('icon \'search\' (@/components/icons/search) -> mounted hook init');
	},

	// Methods
	methods: methods,
}