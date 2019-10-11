import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



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

export default function OutlinedTextFields() {
  const classes = useStyles();


  // const handleChange = name => event => {
  // let  setValues = ({  [name]: event.target.value });
  // };

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
        FormHelperTextProps = {classes.helper}
      />
    </form>
  );
}
