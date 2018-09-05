/**
*   @version 1.0 beta
*   @module ⭐Store
*   @desc <strong>Store</strong>
*   @see ~/store/index
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
import Vuex from 'vuex'

import Site from '@/store/site'
/**
* > [Store Site]{@link module:@/store/site}
*/

const createStore = () => {
  return new Vuex.Store({
    modules: {
        Site
    }
  })
}

export default createStore