import React from 'react';
import { Link } from 'react-router-dom'
import cl from './Chat.module.css';
import Form from './FormTextArea'
import { connect } from "react-redux";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import {  messagesActions  } from "./../../../redux/actions/index";


import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const ChatContainer  = (props) => {
  let isMe=true ;
  let now = new Date()

  return (
    <div className = {cl.maincontainer}>

      <div className= {cl.dialogHeader}>
        <Link to="/dialogs#headerindialogs"><ArrowBackIosIcon /> назад</Link>
        <span className={cl.avatarwrapper}>
         <img className={cl.avatar} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Alpaca_headshot.jpg/260px-Alpaca_headshot.jpg' alt=""/>
        </span>
        <span>Имя диалогиста</span>
        <MoreVertIcon />
      </div>

      <div className = {cl.listOfDialog}>


          <div className = {cl.incomin+ ' ' + cl.message}>
            <p>Так выглядит входящее сообщение</p>
            <span className={cl.date}>
                {formatDistanceToNow(now, {addSuffix: true , locale: ruLocale})}
              </span>
          </div>



          <div className = {isMe ? cl.outcomin+ ' ' + cl.message : cl.incomin+ ' ' + cl.message }>
            <p>Так выглядит исход сообщение</p>
              <span className={cl.date}>
                {formatDistanceToNow(now, {addSuffix: true , locale: ruLocale})}
              </span>
          </div>






      </div>

      <div className = {cl.formcontainer}>
        <Form/>
      </div>
    </div>
  )
}
const mapStateToProps = (state) =>{
return{
state :state

  }
}

const mapDispachToProps = (dispatch) =>{
  return {
    fetchMessages: () =>
      dispatch(messagesActions.fetchMessages())
  }
}
export default connect(mapStateToProps, mapDispachToProps)(ChatContainer)
