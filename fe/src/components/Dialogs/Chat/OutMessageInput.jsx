import React,{useState} from 'react';
import { connect } from "react-redux";

import {messagesActions} from './../../../redux/actions/index'

import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
  MuiInputLabel:{
  bordered: {
    border: '10px solid red'
  }},
}));

const OutMessageInput = ({fetchSendMessage ,currentDialogId}) => {
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
    </form>
  );
}
export default connect(
  ({ dialogs }) => dialogs,
  messagesActions
)(OutMessageInput);
