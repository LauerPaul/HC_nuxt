/**
*   @version 1.0 beta
*   @module store/userData
*   @desc <strong>Store userData</strong> - хранилище данных пользователя
*   @see ~/store/userData
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
const userData = {
    /**
    * @namespace ⭐Store-userData▸state
    *   @property {string} avatar - ссылка на avatar пользователя
    *   @property {string} userFullName - полное имя пользователя
    *   @property {string} userDeviceType - тип оборудования, с которого пользователь пользуется ресурсом на данный момент (mobil|computer|tablet)
    *   @property {int} age - возраст пользователя
    *   @property {string} zodiac - знак зодиака пользователя
    *   @property {string} country - страна пользователя
    *   @property {string} city - город пользователя
    *   @property {array} lookingFor - массив, кого пользователь ищет
    *   @property {array} purposes - массив целей знакомства на сайте
    */
    namespaced: true,
    state: {
        avatar: require('@/assets/images/tmp/profile_avatar.jpg'),
        fullName: 'Вероника Соколова',
        deviceType: 'mobile',
        age: 27,
        zodiac: 'Близнецы',
        country: 'Украина',
        city: 'Харьков',
        lookingFor: [
            'Мужчину',
            'Женщину',
            'Пару'
        ],
        purposes: [
            'Секс без обязательств',
            'Секс без обязательств с постоянным партнером',
            ' Обмен интим-фото',
            'Интим-переписка'
        ]

    },
    mutations: {
    },
}

export default userData