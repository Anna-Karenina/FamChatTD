import React from 'react'

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop:'3%',
    marginLeft: '2.3%',
    backgroundColor: 'rgba(0, 123, 255, .8)',
    width: '95%',
    padding: '15px 16px',
<<<<<<< HEAD
=======

>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
  },
  rightIcon: {
    marginLeft: theme.spacing(2),
  },
}));

const IButton = (props) => {
  const {
    isValid,
    handleSubmit,
    isSubmitting,
    placeholder,
  } = props
  const classes = useStyles();
  return (
<<<<<<< HEAD
    <Button
      variant="contained"
      color="primary"
      disabled={!isValid || isSubmitting }
      className={classes.button} type="submit"
      onClick={handleSubmit}
    >
        {placeholder}
=======
    <Button variant="contained" color="primary"   disabled={!isValid || isSubmitting } className={classes.button} type="submit" onClick={handleSubmit} >
      {placeholder}
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
      <Icon className={classes.rightIcon}>send</Icon>
    </Button>
  )
}

export default IButton
