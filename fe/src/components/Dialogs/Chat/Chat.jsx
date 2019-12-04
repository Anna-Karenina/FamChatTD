import React,{useEffect ,useRef,useState} from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import socket from "./../../../core/socket"
import {  messagesActions  } from "./../../../redux/actions/index";
import typing from '../../../assets/circles-menu-1.gif'
import OutMessageInput from './OutMessageInput'
import Loading from './../../Template/Loading/Loading'

import OneBubbleChat from "./OneBubbleChat"

import cl from './Chat.module.css';

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

const useStyles = makeStyles(theme => ({
  
  bigAvatar: {
    width: 59,
    height: 59,
    marginLeft: '2%',
    marginRight: '3%',
  },
}));

const Chat  = ({
    currentDialogId,
    addMessage,
    fetchMessages,
    items,
    isLoading,
    currentPartner }) => {
 const classes = useStyles()
 const messagesRef = useRef(null)
  const [isTyping, setIsTyping] = useState(false);
  let typingTimeoutId = null;

  const onNewMessage = data => {
    addMessage(data);
  };

  const toggleIsTyping = () => {
    setIsTyping(true);
    console.log('печатает');
    clearInterval(typingTimeoutId);
    typingTimeoutId = setTimeout(() => {
      setIsTyping(false);
    }, 3000);
  };

  useEffect(() => {
    socket.on('DIALOGS:TYPING', toggleIsTyping);
  }, []);

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
    socket.on("SERVER:NEW_MESSAGE", onNewMessage);
    return () =>{
      socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage)};
  }, [currentDialogId]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 999999);
  }, [items, isTyping]);

  return (
    <div className = {cl.maincontainer}>
      <div className= {cl.dialogHeader}>
        <Link
          to="/dialogs#headerindialogs"
          style={{display: "flex", alignItems: 'center', width: '17%'}}>
          <ArrowBackIosIcon />
          <span className={cl.backbutton}>назад</span>
        </Link>
        <span className={cl.date}>
        {currentPartner.isOnline ?
          <span className={cl.online}>
           <PhoneIphoneIcon className={cl.phoneOnline} /> online
          </span> : 'offline'}
        </span>
          <Avatar
            alt={currentPartner.name}
            src={`data:image/jpeg;base64,${currentPartner.avatar}`}
            className= {classes.bigAvatar}
          />
          <span className={cl.partnerName}>
            {currentPartner.name}
          </span>
          <MoreVertIcon  />
      </div>
        { isLoading ?
          <div className = {cl.listOfDialog}>
            <Loading />
          </div>
          :
          <div className = {cl.listOfDialog} ref={messagesRef}>
            {items.map(i =>
              <OneBubbleChat
                key = {i._id}
                id = {i._id}
                text={i.text}
                dialogAuthor = {i.dialog.author}
                messageAuthor = {i.user._id}
                createdAt ={i.createdAt}
                readed={i.readed}
                files={i.files}
                />)}
                { isTyping ?
                  <div className =
                    {cl.incomin + ' ' + cl.message}>
                    <span />
                    <img src={typing} alt='typing' className = {cl.Typing}/>
                    <br  />
                    <span />
                  </div>
                  : null }
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
      currentDialogId: state.dialogs.currentDialogId,
      currentPartner: state.dialogs.currentPartner,
      items: state.message.items,
      isLoading: state.message.isLoading
    }
  }


  export default connect(mapStateToProps, messagesActions)(Chat)
