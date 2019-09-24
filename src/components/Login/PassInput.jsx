import React from 'react'
import styled from './Login.module.css'
import LockIcon from '@material-ui/icons/Lock';

const PassInput = (props) => {
  return (
    <div className = {styled.logininputcontainer}>
      <LockIcon className = {styled.icon}/>
      <input className = {styled.logininput}
        type='password' placeholder='password'/>
    </div>
  )
}

export default PassInput
