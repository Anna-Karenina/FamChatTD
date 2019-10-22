import React from 'react'

import styled from './../Auth.module.css'

import PersonIcon from '@material-ui/icons/Person';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const FullNameInput = (props) => {
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
      <PersonIcon className = {styled.icon}/>
      <input
        id={id}
        placeholder={placeholder}
        type="text"
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
        errors[id] && touched[id] && (
          <IconButton
            title= "Не верный формат почты"
            color="secondary"
            onClick={()=>{alert(errors[id])}}
            className={styled.eror}
            aria-label="errorr">
            <ErrorOutlineIcon />
          </IconButton>)
          }
    </div>
  )
}

export default FullNameInput
