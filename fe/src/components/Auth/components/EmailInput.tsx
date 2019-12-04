import React, { SFC } from 'react'

import * as cl from '../Auth.module.css'
import IconButton from '@material-ui/core/IconButton';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

interface IEmailInputProps{
  values: any
  touched:any
  errors:any
  handleChange:any
  handleBlur:any
  id:string
  placeholder: string
}

const EmailInput: React.SFC<IEmailInputProps>   = React.memo( (props: 
  IEmailInputProps  ) => {
    const {  
    values,
    touched , 
    errors , 
    handleChange , 
    handleBlur , 
    id ,
    placeholder ,} = props
  return (
    <div className ={
        errors[id] && touched[id] ?
        (cl.logininputcontainer+' '+cl.logininputcontainerborder) : (cl.logininputcontainer)
      }>
      <AlternateEmailIcon className = {cl.icon}/>

      <input
        id={id}
        placeholder={placeholder}
        type="email"
        value={values[id]}
        onChange={handleChange}
        onBlur={handleBlur}
        className={cl.logininput}
        />
      {touched[id] && errors[id] === undefined  ?
        <IconButton
          color="primary"
          className={cl.eror}
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
            className={"eror"}
            aria-label="errorr">
            <ErrorOutlineIcon />
          </IconButton>)
        }
      </div>
    )
  })

  export default EmailInput
