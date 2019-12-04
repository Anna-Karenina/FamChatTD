import { connect } from 'react-redux'
import { withFormik } from 'formik';
import Login from './Login';
import {userActions} from './../../../redux/actions/index';



const LoginForm = withFormik ({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validate: (values, touched) => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Обязательно'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email
      )
    ) {
      errors.email = 'Здесь должна быть почта'
    }
    if(!values.password && !touched.password) {
      errors.password = 'Ввидите пароль!'
    }
    return( errors )
  },

  handleSubmit: (values,  { setSubmitting, setStatus, props }) => {
    values.email.toLowerCase()
    props.fetchUserLogin(values)
      .then(()=>{
          setStatus('success')
          setSubmitting(false)
        }
      ).catch(err => {console.log(err)
        setStatus('error')
        setSubmitting(false)
        })
  },
  validateOnChange: true,
  validateOnBlur: false,
  displayName: 'LoginForm',
})(Login);



const mapStateToProps = (state) =>{
return{
  status : state.user.data.status,
  message : state.user.data.message,
  variants: state.user.data.variants,
  }
}

const mapDispachToProps = (dispatch) =>{
  return {
    fetchUserLogin : (values) => dispatch(userActions.fetchUserLogin(values))
  }
}
 const LoginContainer = connect(mapStateToProps, mapDispachToProps)(LoginForm)


export default LoginContainer
