import React from 'react'

import styled from './../Auth.module.css'

import IconButton from '@material-ui/core/IconButton';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const EmailInput = React.memo( (props) => {
  console.log(props)
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    id,
    placeholder
  } = props;
  return (
    <div className ={
        errors[id] && touched[id] ?
        (styled.logininputcontainer+' '+styled.logininputcontainerborder) : (styled.logininputcontainer)
      }>
      <AlternateEmailIcon className = {styled.icon}/>

      <input
        id={id}
        placeholder={placeholder}
        type="email"
        value={values[id]}
        onChange={handleChange}
        onBlur={handleBlur}
        className={styled.logininput}
        />
      {touched[id] && errors[id] === undefined  ?
        <IconButton
          color="primary"
          className={styled.eror}
          aria-label="errorr">
          <CheckCircleOutlineIcon />
        </IconButton>
        :
        errors[id] &&
        touched[id] && (
          <IconButton
            onClick={()=>{alert(errors[id])}}
            title= "Не верный формат почты"
            color="secondary"
            className={styled.eror}
            aria-label="errorr">
            <ErrorOutlineIcon />
          </IconButton>)
        }
      </div>
    )
  })

  export default EmailInput
