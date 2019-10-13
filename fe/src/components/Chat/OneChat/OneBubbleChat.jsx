import React from 'react'

import cl from './Chat.module.css';

// import format from "date-fns/format";
// import isToday from "date-fns/isToday";
// import parse from 'date-fns/parse'

// const getMessageTime = createtime => {
//   if (isToday(createtime)) {
//     return format(createtime, "HH:mm");
//   } else {
//     return format(createtime, "DD.MM.YYYY");
//   }
// };


const OneBubbleChat = (props) =>{
 const {dialogAuthor, text, messageAuthor ,createdAt} = props
 const isMe =  (window.localStorage.ulid === messageAuthor)
  return(
    <div
      className = { isMe ?
         (cl.outcomin + ' ' + cl.message) :
         ( cl.incomin + ' ' + cl.message) }
    >
      <p>{text}</p>
        <span className={cl.date}>
          {createdAt}
        </span>
    </div>
  )
}
export default OneBubbleChat


// <span className={cl.date}>
//     {formatDistanceToNow(now, {addSuffix: true , locale: ruLocale})}
//   </span>
