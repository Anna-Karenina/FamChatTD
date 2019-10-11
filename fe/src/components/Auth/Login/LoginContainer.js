import { connect } from 'react-redux'
import { withFormik } from 'formik';
import Login from './Login';
import {userActions} from './../../../redux/actions/index';



const LoginForm = withFormik ({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validate: (values, touched) => {
    let errors = {};
    let variants =''
    let client = {}

    if (!values.email) {
      errors.email = 'Обязательно'
      client.message = 'Обязательно'
      variants = 'warning'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email
      )
    ) {
      errors.email = 'Неверный формат'
      client.message  = 'Неверный формат'
      variants = 'warning'
    }
    if(!values.password && !touched.password) {
      errors.password = 'Ввидите пароль!'
      client.message = 'Ввидите пароль!'
      variants = 'warning'
    }

    return( errors ,variants, client )
  },

  handleSubmit: (values,  { setSubmitting, setStatus, props }) => {
    props.fetchUserLogin(values)
      .then((data)=>{
          setSubmitting(false)
          setStatus(props.statusError)
        }
      ).catch(()=>{
        setSubmitting(false)
        })
  },validateOnChange: true, validateOnBlur: false,
  displayName: 'LoginForm',
})(Login);

const mapStateToProps = (state) =>{
return{
  statuse : state.user.data.status,
  serverMessageError : state.user.data.message,
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
