import React,{useRef,useEffect} from 'react'

import cl from './Chat.module.css';

import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import  ruLocale  from 'date-fns/locale/ru'


const OneBubbleChat = (props) =>{
console.log(props)
const OneBubbleChatRef = useRef(null)
 const {text, messageAuthor ,createdAt, readed,files,id} = props
 const isMe =  (window.localStorage.ulid === messageAuthor)
 const generateNormaldate = isoDate =>{
   let date = parseISO(isoDate)
   return  format(new Date(date), 'в HH:m',{ locale: ruLocale})
 }

 //// TODO: сделать выезд при перетаскивании справа-налево и меню удаления 
 useEffect( e => {
   e.preventdefault()
    // OneBubbleChatRef.current.onclick =()=>{
    //   console.log(OneBubbleChatRef)
    // }
    OneBubbleChatRef.current.ondblclick =()=>{
      console.log(OneBubbleChatRef + 'duble')
    }
  
},);
  return(
    <div 
     id={id}
     ref = {OneBubbleChatRef}
     className = { isMe  ?
        (cl.outcomin + ' ' + cl.message) :
        ( cl.incomin + ' ' + cl.message) }>
   {files ?
     Object.keys(files).length === 0 ? null :
     <img
       className = {cl.bubbleimg}
       src={`data:image/jpeg;base64,${files}`}
       alt='pic'/>
    : null
   }
     <span style={{ display: 'flex', flexGrow: '1'}}>
       {text}
     </span>

     <sub className={cl.metadata}>
       <span className={cl.date}>
         {generateNormaldate(createdAt)}
       </span>
   { isMe ?
       <span className={cl.tick}>
       {
       !readed ?
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/>
        </svg>
      : <svg xmlns="http://www.w3.org/2000/svg" width="16"
        height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="rgb(227, 119, 194)"/>
        </svg>
       }
       </span>
       :
       <span></span>}
     </sub>
   </div>
 )
}
export default OneBubbleChat
