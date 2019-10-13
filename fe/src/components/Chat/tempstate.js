
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'




let timemessage = formatDistanceToNow(new Date(),
      {addSuffix: true , locale: ruLocale})
let now = new Date()

const initstate = [
   {
    id:1,
    name:'Виктория Соколова',
    login:'VASokolova',
    avatar:'http://portal.azertag.az/sites/default/files/lama2.jpg',
    lastsmessage:{
      id:1,
      message:'Шла Саша по шоссе и сосала',
      timeformat: timemessage,
      time: now,
    },
    unreaded: 0,
  },
  {
    id:2,
    name:'Светлана Соколова',
    login:'SPSokolova',
    avatar:'https://cs9.pikabu.ru/post_img/big/2017/08/19/8/150314846514562633.jpg',
    lastsmessage:{
      id:2,
      message:'Все говорят ну хватит а ты купи слона',
      timeformat: timemessage,
      time: now ,
    },
    unreaded: 3,
  }
]
export default initstate
