import React from 'react'
import { Route  } from 'react-router-dom'
import styled from './Auth.module.css'
import LoginContainer from './Login/LoginContainer';
import RegistrationContainer from './Registration/RegistrationContainer';
import ForgetContainer from './ForgetPass/ForgetContainer';
import Verification from "./verification/Verification.jsx"


const Auth = (props) => {
  return (
   <div className = {styled.container}>
      <div className = {styled.loginContainer}>
       <Route exact path= {['/','/login']} component={LoginContainer} />
       <Route exact path = '/registration' component={RegistrationContainer} />
       <Route exact path = '/registration/verification' component={Verification} />
       <Route exact path = '/forgetpass' component={ForgetContainer} />
      </div>
   </div >
  )
}
export default Auth
