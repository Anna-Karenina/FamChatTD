import React from 'react'
import { Form } from 'formik';

import {IButton, LoginInput, PassInput, EmailInput,SimpleSnackbar } from './../components/index';




const Registration = props => {
  return (
    <Form style={{width:'100%'}} autoComplete="off">

      <EmailInput {...props}  id='email' placeholder='email' p/>
      <LoginInput {...props} placeholder="Имя Фамилия" id = 'newusername'  />
      <PassInput placeholder="Новый пароль" id='regpassword' {...props}  />
      <PassInput placeholder="Проверка пароля" id='regpasswordrepeat' {...props} />
      <IButton placeholder="Регистрация"  {...props}/>
      <SimpleSnackbar {...props} />
    </Form>
  )
}



export default Registration
