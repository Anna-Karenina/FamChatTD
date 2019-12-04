import React from 'react'
import { Form } from 'formik';
import Loading from '../../Template/Loading/Loading'

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
      {props.isSubmitting ? <Loading /> : <span></span>}
      <EmailInput  
        id ="email"  
        placeholder='email'
        values = {props.values}
        touched = {props.touched}
        errors = {props.errors}
        handleChange = {props.handleChange}
        handleBlur = {props.handleBlur} />
      <PassInput
        placeholder="Пароль"
        id='password'
        values = {props.values}
        touched = {props.touched}
        errors = {props.errors}
        handleChange = {props.handleChange}
        handleBlur = {props.handleBlur}/>
      <IButton
        placeholder="Войти"
        isValid = {props.isValid}
        handleSubmit = {props.handleSubmit}
        isSubmitting = {props.isSubmitting}
          />
      <RestoreRegistation />
      <Notification
        status = {props.status}
        message = { props.message }
        variants = {props.variants} />
    </Form>
  )
}


 export default Login
