import React from 'react'
import { Link } from 'react-router-dom'

import styled from './../Login.module.css'

const RegForg = (props) => {
  return(
  <div className={styled.registration}>
    <Link to="/Registration">Регистрация</Link>
    <Link to ="/ForgetPass">Напомнить</Link>
  </div>
 )
}

export default RegForg
