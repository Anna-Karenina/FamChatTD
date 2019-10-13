import React from 'react'

import styled from './../Login.module.css'

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
<<<<<<< HEAD
=======

>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const EmailInput = React.memo( (props) => {
<<<<<<< HEAD
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    id,
    placeholder
  } = props;
=======

  const {
   values,
   touched,
   errors,
   handleChange,
   handleBlur,
   id,
  placeholder
 } = props;
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
  return (
    <div className ={
        errors[id] && touched[id] ?
        (styled.logininputcontainer+' '+styled.logininputcontainerborder) : (styled.logininputcontainer)
      }>
      <AlternateEmailIcon className = {styled.icon}/>

<<<<<<< HEAD
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
=======
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
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
