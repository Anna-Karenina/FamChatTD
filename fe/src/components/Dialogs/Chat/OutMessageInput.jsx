import React,{useState} from 'react';
import { connect } from "react-redux";

import {messagesActions} from './../../../redux/actions/index'

import { makeStyles, TextField } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderRadius: '4px',
  },
  textField: {
    width: '100%',
    margin: '0',
    padding: '0',
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  helper: {
    fontSize: '20px',
    color: 'red'
  },
  circle:{
    background: '#008a7c',
    borderRadius: '50%',
    color: '#fff',
    position: 'relative',
    minWidth: "28px",
    minHeight: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1%',
  },
  ico:{
    maxWidth:'18px',
    minWidth:'18px',
    maxHeight:'18px',
    minHeight:'18px',
    zIndex: '2',
  },
  inputfile:{
    	width: '0.1px',
    	height: '0.1px',
    	opacity: '0',
    	overflow: 'hidden',
    	position: 'absolute',
      zIndex: '-1',
  },
  lable:{
    display:'flex',
  },
  MuiInputLabel:{
  bordered: {
    border: '10px solid red'
  }},
}));

const OutMessageInput = ({ fetchSendMessage ,currentDialogId }) => {
 const classes = useStyles();
 const [value, setValue] = useState("");

const handleSendMessage = e => {
  if (e.keyCode === 13) {
    fetchSendMessage(value, currentDialogId);
    setValue("");
  }
};
  return (
    <form className={classes.container} noValidate autoComplete='off'>
       <TextField
        id="outlined-textarea"
        label="Ввидите сообщение"
        placeholder="Ввидите сообщение"
        multiline
        className={classes.textField}
        margin="normal"
        variant="outlined"
        autoFocus = {false}
        onChange={e => setValue(e.target.value)}
        onKeyUp={handleSendMessage}
        value={value}
      />
    <span
      className={classes.circle} onClick={()=>{
        fetchSendMessage(value, currentDialogId )
        setValue("");
      }
        }>
      <SendIcon className={classes.ico} />
    </span>

    <span className={classes.circle}>
      <input type="file" name="file" id="file" className={classes.inputfile} />
      <label htmlFor="file" className={classes.lable}>
        <PhotoCameraIcon className={classes.ico}/>
      </label>
    </span>


    <span className={classes.circle}><MicIcon className={classes.ico} /></span>
    </form>

  );
}
export default connect(
  ({ dialogs }) => dialogs,
  messagesActions
)(OutMessageInput);
