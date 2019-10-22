import React from 'react'
import { Route  } from 'react-router-dom'
import styled from './Auth.module.css'
import LoginContainer from './Login/LoginContainer';
import RegistrationContainer from './Registration/RegistrationContainer';
import ForgetPass from './ForgetPass/ForgetPass';
import Verification from "./verification/Verification.jsx"


const Auth = (props) => {
  return (
   <div className = {styled.container}>
      <div className = {styled.loginContainer}>
       <Route exact path= {['/','/login']} component={LoginContainer} />
       <Route exact path = '/Registration' component={RegistrationContainer} />
       <Route exact path = '/Registration/verification' component={Verification} />
       <Route exact path = '/ForgetPass' component={ForgetPass} />
      </div>
   </div >
  )
}
export default Auth
