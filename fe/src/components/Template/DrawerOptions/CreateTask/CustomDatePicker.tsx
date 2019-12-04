import React from "react";
import { DateTimePicker } from '@material-ui/pickers'

import { makeStyles } from '@material-ui/core/styles';

interface ITempProps{
  name:string
  form:any
  field:any
}

const useStyles = makeStyles(theme => ({
  DateTimePicker:{
    padding: 0
  }
}))

const CustomDatePicker:React.FC<ITempProps> = ({
  name,
  form: { setFieldValue },
  field: { value },
  ...rest
}) => {
  const classes = useStyles();
  return (
     <DateTimePicker
      className={classes.DateTimePicker}
      name={name}
      ampm={false}
      disableToolbar = {true}
      inputVariant="outlined"
      variant='inline'      
      clearable = {true}
      autoOk={true}
      disablePast={true}
      label="Выбрать Дэдлайн"
      format="dd.MM.yyyy  HH:mm"
      placeholder="dd/MM/yyyy"
      onChange={value => {
        setFieldValue("datepickerinline", value);
      }}
      value={value}
      animateYearScrolling={false}
    />
  );
};

export default CustomDatePicker
