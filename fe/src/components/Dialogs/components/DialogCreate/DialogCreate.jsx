import React,{useState} from 'react'
import { connect } from "react-redux";
import {  userActions,  } from "./../../../../redux/actions/index";
import { dialogsApi } from './../../../../core/api/index'
import Select from 'react-select';
import { withFormik, Form } from 'formik';
import { Notification } from './../../../Auth/components/index'
// import Loading from './../Template/Loading/Loading';


import { makeStyles, Button,
  Dialog, DialogActions,
  DialogContent, DialogTitle, TextField } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    zIndex: '10'
  },
  textField:{
    width: '100%',

  }
}));

const DialogCreate = ({ users, fetchAllUsersForNewDialogs, ...props,}) => {
  const classes = useStyles();
  const [state, setState] = useState({ open: false});
  const {handleChange, handleSubmit, values, handleBlur, status} = props

console.log(users, props)

  const handleClickOpen = () => {
    setState({ ...state, open: true });
      fetchAllUsersForNewDialogs()
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  if(!!users){
     users.map(i =>  i.label=i.name, )
  }

return(
  <div>
    <Button onClick={handleClickOpen}>
      <PostAddIcon />
    </Button>

    <Form className={classes.container}>
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={state.open}
      onClose={handleClose}>
      <DialogTitle>Создать новый диалог</DialogTitle>
      <DialogContent>
        <Select
          className = {classes.formControl}
          placeholder ='Все пользователи'
          name="partner"
          id="partner"
          isClearable={true}
          isSearchable={true}
          options={users}
          onChange={(newValue)=>props.setValues(newValue)}
          defaultValue = 'val'
        />
          <TextField
            id="newMessage"
            label="Новое сообщение"
            multiline
            rows="6"
            placeholder="Напишите сюда новое сообщение"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.newMessage}
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="outlined">
           Отмена
        </Button>
        <Button onClick={handleSubmit} variant="contained" type="submit" color="primary">
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
    </Form>
    <Notification status={status} serverMessageError={props.serverMessageError} />
  </div>
)
}

const EnhancedDialogCreate = withFormik({

  handleSubmit: (values, {setSubmitting, setStatus, props }) => {
    console.log(props)
    setTimeout(() => {
      dialogsApi
        .newDialog({
          partner: values._id,
          text: values.newMessage
        }).then((data)=>{
          if(data.status) {
            setStatus('error')
          } else {
            setStatus('success')
          }
        }
      ).catch(err => {
        console.log(err)
          })
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'EnhancedDialogCreateForm',
})(DialogCreate);

export default connect(
  ({ user }) => ({users: user.users}),
  (userActions)
)(EnhancedDialogCreate);
