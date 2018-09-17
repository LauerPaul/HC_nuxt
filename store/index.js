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
import LeftMenu from '@/store/left_menu'
import UserData from '@/store/userData'
/**
* > [Store Site]{@link module:@/store/site}
*/

const createStore = () => {
  return new Vuex.Store({
    modules: {
        Site,
        LeftMenu,
        UserData
    }
  })
}

export default createStore