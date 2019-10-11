import React from 'react';
import { Link } from 'react-router-dom'
import orderBy from 'lodash/orderBy'
import { connect } from "react-redux";
import {  dialogsActions , messagesActions } from "./../../redux/actions/index";

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

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
  avatarwrapper: {
    height:'100%',
    width:'25%',
  },
  avatar: {
    width: '100%',
    borderRadius: '55px',
  },
  discription: {
    padding: '2%',
    width: '75%'
  },
  name:{
    margin: '0'
  },
  lastsmessage: {
    margin: '0',
    width: '100%'
  },
  unreadedwrapper:{
    margin: '0',
    padding: '0',
  },
  unreaded:{
    borderRadius: '50%',
    backgroundColor: 'rgba(250, 114, 104, .7)',
    fontSize: '14px',
    padding: '4px 6px',
  },
  menu:{
    padding: '0',
    margin: '0',
    maxWidth: '40px',
    display: 'flex',
    justifyContent: 'center',
  },

}));

const DialogList  = (props) => {
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
       />)
  const classes = useStyles();
  return (
    <>
    <Paper className={classes.dialogselect} name='headerindialogs'>
      <h3 style={{paddingLeft: '5%'}}>Диалоги</h3>
      <DialogSelect options = {state}/>
    </Paper>

    {list}

<button onClick={props.fetchDialogs }> fetchDialogs</button>
</>
  )
}



const OneDialogElement = (props) =>{
  console.log(props)
  const classes = useStyles();
  return(
    <Paper className={classes.root}
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
        <SimpleMenu />
    </div>

    </Paper>
  )
}

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
)(DialogList);
