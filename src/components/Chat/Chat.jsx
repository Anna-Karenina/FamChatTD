import React from 'react';
import cl from './Chat.module.css';
import Form from './FormTextArea'

const ChatContainer  = (props) => {
  return (
    <div className = {cl.maincontainer}>
      <div className = {cl.listOfDialog}>

        <div className = {cl.incomin+ ' ' + cl.message}>Так выглядит входящее сообщение</div>
        <div className = {cl.outcomin + ' ' + cl.message}>Так выглядит исходящее сообщение</div>

      </div>

      <div className = {cl.messagecontainer}>
        <Form/>
      </div>
    </div>
  )
}

export default ChatContainer
