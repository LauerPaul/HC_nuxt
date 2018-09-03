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
import Chat from '@/store/chat'
/**
* > [Store Site]{@link module:@/store/site}
* > [Store Chat]{@link module:@/store/chat}
*/

const createStore = () => {
  return new Vuex.Store({
    modules: {
        Site
    }
  })
}

export default createStore