import React from 'react'
import styled from './Login.module.css'
import PersonIcon from '@material-ui/icons/Person';

const LoginInput = (props) => {
  return (

    <div className = {styled.logininputcontainer}>
          <PersonIcon className = {styled.icon}/>
          <input  className = {styled.logininput}
                  placeholder='login'/>
        </div>
  )
}

export default LoginInput
