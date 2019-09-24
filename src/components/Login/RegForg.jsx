import React from 'react'
import { Link } from 'react-router-dom'
import styled from './Login.module.css'

const RegForg = (props) => {
  return(
  <div className={styled.registration}>
    <Link to="./registration">Регистрация</Link>
    <Link to ="./">Напомнить</Link>
  </div>
 )
}

export default RegForg
