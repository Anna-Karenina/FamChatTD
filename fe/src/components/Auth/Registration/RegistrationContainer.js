import React from 'react'
import { connect } from 'react-redux'
import { withFormik } from 'formik';
import Registration from './Registration';
import {userActions} from './../../../redux/actions/index';
import  { Redirect } from "react-router-dom";

const redir= () => {
  return <Redirect to="/verification" />
}

const RegistrationForm = withFormik({
  mapPropsToValues: () => (
    { email: '', newusername: '' , regpassword:'', regpasswordrepeat: '' }
  ),
  validate: values => {
    let errors = {};

    if (!values.email) {
      errors.email = 'Обязательно';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email
      )
    ) {
      errors.email = 'Неверный формат, укажите почту';
    }

    if(!values.newusername){
      errors.newusername = 'Обязательно Ввести имя и фамилию';
    }

    if (!values.regpassword) {
      errors.regpassword = 'Обязательно';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/.test(
        values.regpassword
      )
    ) {
      errors.regpassword = 'Пароль должен состоять из 6 латинских букв и одной заглавной';
    }

    if (!values.regpasswordrepeat) {
      errors.regpasswordrepeat = 'Обязательно';
    } else if (values.regpasswordrepeat !== values.regpassword)
     {
      errors.regpasswordrepeat = 'Пароли не совпадают';
    }

    return errors;
  },

  handleSubmit: (values,  { setSubmitting, setStatus, props }) => {
    values.email.toLowerCase()
    props.fetchUserRegister(values)
      .then((data)=>{
          console.log(data)
        setSubmitting(false)
        if(data.status === 'error'){
          return setStatus(data.status)
        } else {
          props.history.push('/login');
        }
      })
      .catch(err=>{
      setStatus(props.statusError)
        })
  },validateOnChange: true, validateOnBlur: false,
  displayName: 'RegistrationForm',
})(Registration);

const mapStateToProps = (state) =>{
return{
  statusError : state.user.data.status,
  serverMessageError : state.user.data.message,
  variants: state.user.data.variants,
  }
}


const mapDispachToProps = (dispatch) =>{
  return {
    fetchUserRegister : (values) => dispatch(userActions.fetchUserRegister(values))
  }
}

const RegistrationContainer = connect(mapStateToProps,mapDispachToProps)(RegistrationForm)

export default RegistrationContainer
