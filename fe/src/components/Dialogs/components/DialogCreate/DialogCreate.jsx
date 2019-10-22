import React,{useState} from 'react'
import { connect } from "react-redux";
import {  userActions,  } from "./../../../../redux/actions/index";
import { dialogsApi } from './../../../../core/api/index'
import Select from 'react-select';
import { withFormik, Form } from 'formik';
// import Loading from './../Template/Loading/Loading';


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
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
  const {handleChange, handleSubmit, values, handleBlur } = props

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
  </div>
)
}

const EnhancedDialogCreate = withFormik({

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      dialogsApi
        .newDialog({
          partner: values._id,
          text: values.newMessage
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
