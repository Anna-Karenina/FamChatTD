import React from 'react'
import { Form } from 'formik';

import {
  RestoreRegistation,
  EmailInput,
  PassInput,
  IButton,
  Notification }  from './../components/index';



const Login = (props) => {
  console.log(props)
  return (
    <Form style={{width:'100%'}} autoComplete="off">
      <EmailInput {...props} id ="email"  placeholder='email'  />
      <PassInput placeholder="Пароль" id='password' {...props}  />
      <IButton placeholder="Войти" {...props}  />
      <RestoreRegistation />
      <Notification {...props} />
    </Form>
  )
}


 export default Login
