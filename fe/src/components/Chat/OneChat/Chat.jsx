import React,{useEffect ,useRef} from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import socket from "./../../../core/socket"
import {  messagesActions  } from "./../../../redux/actions/index";


import OutMessageInput from './OutMessageInput'
import Loading from './../../Template/Loading/Loading'

import OneBubbleChat from "./OneBubbleChat"

import cl from './Chat.module.css';

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    width: 59,
    height: 59,
    marginLeft: '10%',
    marginRight: '3%',
  },

}));

const ChatContainer  = (props) => {
  const classes = useStyles();
console.log(props)
const {currentDialogId, addMessage, fetchMessages , items, isLoading, currentPartner } = props

const messagesRef = useRef(null);

const onNewMessage = data => {
  console.log(data)
    addMessage(data);
  };

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
    socket.on("SERVER:NEW_MESSAGE", onNewMessage, console.log('пришшло сообщение'));

    return () =>{ socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage)};
  }, [currentDialogId]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 999999);
  }, [items]);

  let list = items.map(i =>
    <OneBubbleChat
      key = {i._id}
      text={i.text}
      dialogAuthor = {i.dialog.author}
      messageAuthor = {i.user._id}
      createdAt ={i.createdAt}
    />
  )



  return (
    <div className = {cl.maincontainer}>
      <div className= {cl.dialogHeader}>
      <Link
        to="/dialogs#headerindialogs"
        style={{display: "flex", alignItems: 'center', width: '17%'}}>
          <ArrowBackIosIcon />
          <span className={cl.backbutton}>назад</span></Link>


          <Avatar
            alt={currentPartner.name}
            src={currentPartner.avatar}
            className= {classes.bigAvatar} />


        <span className={cl.partnerName} >{currentPartner.name}</span>
        <MoreVertIcon style={{marginLeft: '7%'}} />
      </div>
        { isLoading ? <Loading /> :
          <div className = {cl.listOfDialog} ref={messagesRef}>


{list}




          </div>
           }


      <div className = {cl.formcontainer}>
        <OutMessageInput />
      </div>
    </div>
  )
}



const mapStateToProps = (state) =>{
return{
state :state,
currentDialogId: state.dialogs.currentDialogId,
currentPartner: state.dialogs.currentPartner,
items: state.message.items,
isLoading: state.message.isLoading
  }
}


export default connect(mapStateToProps, messagesActions)(ChatContainer)
