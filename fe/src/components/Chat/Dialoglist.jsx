import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'
import orderBy from 'lodash/orderBy'
import { connect } from "react-redux";
import {  dialogsActions  } from "./../../redux/actions/index";
import socket from "./../../core/socket"

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import SimpleMenu from './menu';
import DialogSelect from './DialogSelect';


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

  avatar: {
    width: '100%',
    borderRadius: '55px',
  },
  discription: {
    padding: '2%',
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
  },
  unreadedwrapper:{
    margin: '0',
    padding: '0',
      maxWidth: '20px'
  },
  unreaded:{
    borderRadius: '50%',
    backgroundColor: 'rgba(250, 114, 104, .7)',
    fontSize: '14px',
    padding: '4px 7px',
  },
  menu:{
    padding: '0',
    margin: '0',
    maxWidth: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  bigAvatar: {
    width: 59,
    height: 59,
    marginLeft: '3%',
    marginRight: '3%',
  },

}));

const DialogList  = (props) => {

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
       />)
  const classes = useStyles();
  return (
    <>
    <Paper className={classes.dialogselect} name='headerindialogs'>
      <h3 style={{paddingLeft: '5%'}}>Диалоги</h3>
      <DialogSelect options = {items}/>
    </Paper>

    {list}

</>
  )
}

const OneDialogElement = (props) =>{
  const {id,  partner, lastsMessage,readed }= props
  console.log(props)
  const classes = useStyles();
  return(
    <Paper className={classes.root}
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
        <SimpleMenu />
    </div>

    </Paper>
  )
}

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
)(DialogList);
