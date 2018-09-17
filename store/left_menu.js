/**
*   @version 1.0 beta
*   @module store/left_menu
*   @desc <strong>Left menu</strong> - хранилище данных левого меню
*   @see ~/store/left_menu
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

import menu from '@/static/tmp/left_menu_list.json'

const left_menu = {
    /**
    * @namespace ⭐Store-leftMenu▸state
    *   @property {object} notify - количество оповищений
    *   @property {object} listMenu - список пунктов меню
    *       @property {string} listMenu.key - Ключ для сопоставления обновлений из хранилища
    *       @property {string} listMenu.name - Название пункта меню
    *       @property {string} listMenu.link - Ссылка (адрес, имя роута или путь)
    *       @property {string} listMenu.link_type - Тип ссылки (Route name, link, path)
    *       @property {string} listMenu.icon - Класс иконки
    *       @property {boolean} listMenu.status - Статус видимости на сайте
    *       @property {boolean} listMenu.special_class - Дополнительный специальный класс (для css)
    *       @property {boolean} listMenu.notify - Статус видимости лейблов оповищений (кол-во не просмотренных записей и т.д.)
    *       @property {boolean} listMenu.devider - Разделитель меню
    */
    namespaced: true,
    state: {
        notify: {
        	club: 3524,
        	updates: 12,
        	messages: 3,
        	meets: 1,
        	suitable: 32
        },
        listMenu: menu
    },
    mutations: {
        // ADD_VISIT(state, path) {
        //     var reg = /\.css|\.js/;

        //     if(!path.match(reg)){
        //         state.visits.push({
        //             path,
        //             date: new Date().toJSON()
        //         })
        //     }
        // },
    },
}

export default left_menu