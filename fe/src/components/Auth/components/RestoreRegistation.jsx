import React from 'react'
import { Link } from 'react-router-dom'

import styled from './../Auth.module.css'

const RestoreRegistation = (props) => {
  return(
  <div className={styled.registration}>
    <Link to="/user/registration">Регистрация</Link>
    <Link to ="/user/forgetpass">Напомнить</Link>
  </div>
 )
}

export default RestoreRegistation
