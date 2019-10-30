import { withFormik } from 'formik';
import ForgetPass from './ForgetPass';



const ForgetPassContainer = withFormik ({
  mapPropsToValues: () => ({ email: '' }),
  validate: (values) => {
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
  },

  handleSubmit: (values,  { setSubmitting,}) => {
    values.email.toLowerCase()
    console.log(values)
        },
  validateOnChange: true,
  validateOnBlur: false,
  displayName: 'ForgetPassForm',
})(ForgetPass);


export default ForgetPassContainer
