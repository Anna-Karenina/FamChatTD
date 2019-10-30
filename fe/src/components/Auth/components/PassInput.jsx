import React from 'react'

import styled from './../Auth.module.css'

import LockIcon from '@material-ui/icons/Lock';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const PassInput = (props) => {
  const {
   values,
   touched,
   errors,
   handleChange,
   handleBlur,
   id,
   placeholder,

 } = props;
  return (
    <div className ={
        errors[id] && touched[id] ?
        (styled.logininputcontainer+' '+styled.logininputcontainerborder) : (styled.logininputcontainer)
      }>
      <LockIcon className = {styled.icon}/>
      <input
        id={id}
        placeholder={placeholder}
        type='password'
        value={values[id]}
        onChange={handleChange}
        onBlur= {handleBlur}
        className = {
          errors[id] && touched[id] ?
          (styled.logininput+' '+styled.logininputerrr) : (styled.logininput)
        }
        />
        {touched[id] && errors[id] === undefined  ?
          <IconButton
              color="primary"
              className={styled.eror}
              aria-label="errorr">
          <CheckCircleOutlineIcon />
        </IconButton>
              :
            errors[id] && touched[id] && (
            <IconButton
                onClick={()=>{alert(errors[id])}}
                color="secondary"
                className={styled.eror}
                aria-label="errorr">
            <ErrorOutlineIcon />
          </IconButton>)
          }
    </div>
  )
}

export default PassInput
