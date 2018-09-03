/**
*   @version 1.0 beta
*   @module @/store/site
*   @desc <strong>Store Site</strong> - хранилище данных приложения
*   @see ~/store/site
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
const Site = {
    /**
    * @namespace ⭐Store-site▸state
    *   @property {string} logo - site logo SRC
    *   @property {string} logo_alt - site logo ALT
    *   @property {array} visits - user visits history
    */
    namespaced: true,
    state: {
        visits: [],
        logo: require('~/assets/images/logo.png'),
        logo_alt: 'site logo'
    },
    mutations: {
        ADD_VISIT(state, path) {
            var reg = /\.css|\.js/;

            if(!path.match(reg)){
                state.visits.push({
                    path,
                    date: new Date().toJSON()
                })
            }
        },
    },
}

export default Site