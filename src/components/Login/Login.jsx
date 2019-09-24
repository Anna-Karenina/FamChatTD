import React from 'react'
import { Route  } from 'react-router-dom'
import styled from './Login.module.css'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import RegForg from './RegForg';
import LoginInput from './LoginInput';
import PassInput from './PassInput';
import Registration from './Registration';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'rgba(0, 123, 255, .7)',
    width: '90%',
    padding: '15px 16px',

  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

const Login = (props) => {
 const classes = useStyles();
  return (
   <div className = {styled.container}>
    <div className = {styled.loginContainer}>
      <Route exact path={['.' ,'/login']} component={LoginInput} />
      <Route exact path={'/registration'} component={Registration} />

     <PassInput />
     <Button variant="contained" color="primary" className={classes.button}>
      login
       <Icon className={classes.rightIcon}>send</Icon>
     </Button>

     <RegForg />
     </div>
    </div >
  )
}

export default Login
