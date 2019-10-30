import React from 'react'
import { Form } from 'formik';

import {
  IButton,
  FullNameInput,
  PassInput,
  EmailInput,
  Notification,
  RestoreRegistation,
 } from './../components/index';




const Registration = props => {
  return (
    <Form style={{width:'100%'}} autoComplete="off">
      <EmailInput {...props}  id='email' placeholder='email' p/>
      <FullNameInput {...props} placeholder="Имя Фамилия" id = 'newusername'  />
      <PassInput placeholder="Новый пароль" id='regpassword' {...props}  />
      <PassInput placeholder="Проверка пароля" id='regpasswordrepeat' {...props} />
      <IButton placeholder="Регистрация"  {...props}/>
      <Notification  {...props} />
      <RestoreRegistation />
    </Form>
  )
}



export default Registration
