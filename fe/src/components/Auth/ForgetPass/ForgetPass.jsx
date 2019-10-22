import React from 'react'

import {
  RestoreRegistation,
  IButton,
  EmailInput
} from './../components/index';

const ForgetPass = (props) => {
  return (
    <>
    <EmailInput {...props} id ="email"  placeholder='email'  />
    <IButton text="Напомнить"/>
    <RestoreRegistation />
    </>
  )
}

export default ForgetPass
