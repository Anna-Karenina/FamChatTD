<<<<<<< HEAD
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'
import orderBy from 'lodash/orderBy'
import { connect } from "react-redux";
import {  dialogsActions  } from "./../../redux/actions/index";
import socket from "./../../core/socket"
=======
import React from 'react';
import { Link } from 'react-router-dom'
import orderBy from 'lodash/orderBy'
import { connect } from "react-redux";
import {  dialogsActions , messagesActions } from "./../../redux/actions/index";
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
<<<<<<< HEAD
import Avatar from '@material-ui/core/Avatar';
=======
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927

import SimpleMenu from './menu';
import DialogSelect from './DialogSelect';


<<<<<<< HEAD
=======



>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(.2, .5),
    margin: theme.spacing(0.5, 1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dialogselect:{
    padding: theme.spacing(.3, .3),
    margin: theme.spacing(0.5, 1),
  },
  onedialogwrapper:{
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
<<<<<<< HEAD

=======
  avatarwrapper: {
    height:'100%',
    width:'25%',
  },
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
  avatar: {
    width: '100%',
    borderRadius: '55px',
  },
  discription: {
    padding: '2%',
<<<<<<< HEAD
    minWidth: '80%',
    maxWidth: '80%',
  },
  name:{
    margin: '0',
    padding: '1%',
    width: '100%',
  },
  lastsmessage: {
    margin: '0',
    width: '100%',
    fontSize: '12px'
=======
    width: '75%'
  },
  name:{
    margin: '0'
  },
  lastsmessage: {
    margin: '0',
    width: '100%'
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
  },
  unreadedwrapper:{
    margin: '0',
    padding: '0',
<<<<<<< HEAD
      maxWidth: '20px'
=======
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
  },
  unreaded:{
    borderRadius: '50%',
    backgroundColor: 'rgba(250, 114, 104, .7)',
    fontSize: '14px',
<<<<<<< HEAD
    padding: '4px 7px',
=======
    padding: '4px 6px',
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
  },
  menu:{
    padding: '0',
    margin: '0',
    maxWidth: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
<<<<<<< HEAD
  bigAvatar: {
    width: 59,
    height: 59,
    marginLeft: '3%',
    marginRight: '3%',
  },
=======
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927

}));

const DialogList  = (props) => {
<<<<<<< HEAD

console.log(props)
const {fetchDialogs, items} = props

  const onNewDialog = () => {
    fetchDialogs();
  };

  useEffect(() => {
    fetchDialogs();
    if (items.length) {
      fetchDialogs();
    }

    socket.on("SERVER:DIALOG_CREATED", onNewDialog);
    return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
  }, []);

  let list = orderBy(items , ['unreaded'],['desc']).map(i =>
    <OneDialogElement
      key={i._id}
      authorName={i.author.name}
      partner={i.partner}
      id={i._id}
      lastsMessage={i.lastMessage.text}
      readed={i.lastMessage.readed}
      fetchDialogs={i.fetchDialogs}
      currentDialogId ={i.currentDialogId}
      setCurrentDialogId={props.setCurrentDialogId}
      userId={i.userId}
      items={i.items}
=======
const state = props.items
console.log(props)

  let list =
  orderBy(state , ['unreaded'],['desc']).map(i =>
    <OneDialogElement
      key={i.id}
      authorName={i.author.name}
      partnerName={i.partner.name}
      id={i._id}
      avatar = {i.partner.avatar}
      lastsmessage={i.lastMessage.text}
      readed={i.lastMessage.readed}
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
       />)
  const classes = useStyles();
  return (
    <>
    <Paper className={classes.dialogselect} name='headerindialogs'>
      <h3 style={{paddingLeft: '5%'}}>Диалоги</h3>
<<<<<<< HEAD
      <DialogSelect options = {items}/>
=======
      <DialogSelect options = {state}/>
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
    </Paper>

    {list}

<<<<<<< HEAD
=======
<button onClick={props.fetchDialogs }> fetchDialogs</button>
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
</>
  )
}

<<<<<<< HEAD
const OneDialogElement = (props) =>{
  const {id,  partner, lastsMessage,readed }= props
=======


const OneDialogElement = (props) =>{
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
  console.log(props)
  const classes = useStyles();
  return(
    <Paper className={classes.root}
<<<<<<< HEAD
            style={{textDecaration: 'none'}}
      onClick={props.setCurrentDialogId.bind(this, {id, partner })}
      >
    <Link to={`/messages?dialogs=${id}`}

       className={classes.onedialogwrapper}>

       <Avatar
         alt={partner.avatar.name}
         src={partner.avatar}
         className= {classes.bigAvatar} />




       <div className={classes.discription}>
         <h3 className={classes.name}>{partner.name}</h3>
         <p className={classes.lastsmessage}>{lastsMessage}</p>
       </div>



    </Link>
    <div className={classes.menu}>
      {readed ? <div></div> :
        <IconButton className={classes.unreadedwrapper}>
        <span className={classes.unreaded}> +1 </span>
       </IconButton>
      }
=======
            style={{textDecaration: 'none'}}>

    <Link to={{
        pathname: '/messages',
        search: `?dialogs=${props.id}`
      }}



       className={classes.onedialogwrapper}>
       <div className={classes.avatarwrapper}>
        <img className={classes.avatar} src={props.avatar} alt="s"/>
       </div>
       <div className={classes.discription}>
         <h3 className={classes.name}>{props.partnerName}</h3>
         <p className={classes.lastsmessage}>{props.lastsmessage}</p>
       </div>

       {props.readed ? <div></div> :
         <IconButton className={classes.unreadedwrapper}>
         <span className={classes.unreaded}> '+' </span>
        </IconButton>

}

    </Link>
    <div className={classes.menu}>
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
        <SimpleMenu />
    </div>

    </Paper>
  )
}

<<<<<<< HEAD
// const mapDispachToProps = (dispatch) =>{
//   return {
//     fetchMessages: () =>
//       dispatch(messagesActions.fetchMessages()),
//       fetchDialogs: () =>
//         dispatch(dialogsActions.fetchDialogs( )),
//         // setCurrentDialogId: (id)
//   }
// }

export default connect(
  ({ dialogs }) => dialogs,
  dialogsActions
=======
const mapDispachToProps = (dispatch) =>{
  return {
    fetchMessages: () =>
      dispatch(messagesActions.fetchMessages()),
      fetchDialogs: () =>
        dispatch(dialogsActions.fetchDialogs( ))
  }
}

export default connect(
  ({ dialogs }) => dialogs,
  mapDispachToProps
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
)(DialogList);
