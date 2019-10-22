import React, {useState, useEffect} from 'react'
import 'date-fns'
import { Form } from 'formik'

import {GreenRadio,RedRadio,YellowRadio,OrangeRadio}  from './ColoredRadio'
import  CustomSelect   from './CustomSelect'
import {
  Button,
  Dialog,
  makeStyles,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField } from '@material-ui/core';

  import PostAddIcon from '@material-ui/icons/PostAdd';
  import DateFnsUtils from '@date-io/date-fns'
  import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

  const useStyles = makeStyles(theme => ({
    root:{
      Width:  '90%',
      Height: '90%',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      padding: theme.spacing(1),
      minWidth:350,
    },
    btn:{
      color: '#fff',
      margin: 0,
      padding: 0,
      justifyContent: 'start',
    },
    formControl: {
      margin: theme.spacing(2),
      minWidth: 400,
      zIndex: '10',
      top: '2px',
      left: '2px',
    },
    formControlSelect: {
      zIndex: '20'
    },
    taskName: {
      marginTop: theme.spacing(2),
    },
    formcontainer:{
      height: '90%',
      width:   '90%',
      display:'flex',
      flexDirection: 'column',
      margin: theme.spacing(1)
    },
    paper:{
      margin: '5%',
    },
    underline:{
      '&::before':{
        display:'none',
      },
      labelindx:{
        zIndex: 0,
      },
    },
  }));

  const CreateTask = (props) => {
    const {handleSubmit, handleChange, values, setFieldValue} = props
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState('a');
    const [state, setState] = useState({ open: false });
    const [users, setUsers] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
      setSelectedDate(date);
    };

    const handleClickOpen = () => {
      setState({ ...state, open: true });
    };

    const handleClose = () => {
      setState({ ...state, open: false });
    };
    const handleChangeRadio = event => {
      setSelectedValue(event.target.value);
    };

    useEffect(() => {
      if(props.users !== undefined){
        setUsers(props.users)
      }
    },[props.users]);

    useEffect(() => {
      if(props.users === undefined){
        props.fetchAllUsers();
        console.log('props.fetchAllUsers();');
      }
    },[props.users]);

    console.log(props)
    return (
      <>
      <Button onClick={handleClickOpen}
        className={classes.btn}
        >
        <PostAddIcon />
      </Button>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={state.open}
        onClose={handleClose}
        className={classes.root}
        classes={{
          paper: classes.paper
        }}
        >
        <DialogTitle>Новая задача</DialogTitle>

        <Form
          className={classes.formcontainer}
          onChange={handleChange}
          >
          <DialogContent className={classes.container}>
            <TextField
              id="taskName"
              label="Название таски"
              className={classes.taskName}
              margin="dense"
              variant="outlined"
              value={values.taskName}
              />
            <CustomSelect
              className = {classes.formControlSelect}
              onChange={setFieldValue}
              value={values}
              users={users}
              />

            <div style={{display:'flex'}}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    borderRadius: '5px',
                    marginRight: '5px'
                  }}
                  disableToolbar
                  variant="standart"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="datepickerinline"
                  label="Дата выполнения"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  />
                <KeyboardTimePicker
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    borderRadius: '5px',
                    marginLeft: '5px'
                  }}
                  margin="normal"
                  id="timepicker"
                  label="Время выполнения"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                  />
              </MuiPickersUtilsProvider>
            </div>
            <TextField
              id="taskDiscription"
              label="Подробное описание"
              className={classes.taskName}
              margin="dense"
              variant="outlined"
              multiline
              rows="4"
              value={values.taskDiscription}
              />

            <div>
              Приоритет
              <RedRadio
                checked={selectedValue === 'priority1'}
                onChange={handleChangeRadio}
                value="priority1"
                name="priority"
                inputProps={{ 'aria-label': 'A' }}
                />
              <OrangeRadio
                checked={selectedValue === 'priority2'}
                onChange={handleChangeRadio}
                value="priority2"
                color="default"
                name="priority"
                inputProps={{ 'aria-label': 'B' }}
                />
              <YellowRadio
                checked={selectedValue === 'priority3'}
                onChange={handleChangeRadio}
                value='priority3'
                name="priority"
                inputProps={{ 'aria-label': 'C' }}
                />

              <GreenRadio
                checked={selectedValue === 'priority4'}
                onChange={handleChangeRadio}
                value="priority4"
                name="priority"
                inputProps={{ 'aria-label': 'C' }}
                />

            </div>


          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Отмена
            </Button>
            <Button
              color="primary"
              type="submit"
              onClick={handleSubmit, handleClose}
              >
              Создать
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
      </>
  );
}



export default CreateTask
