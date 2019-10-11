import React from 'react'

import {RegForg, IButton, LoginInput} from './../components/index';

const ForgetPass = (props) => {
  return (
    <>
    <LoginInput text="Логин или email" id="mailforget"/>
    <IButton text="Напомнить"/>
    <RegForg />
    </>
  )
}

export default ForgetPass
