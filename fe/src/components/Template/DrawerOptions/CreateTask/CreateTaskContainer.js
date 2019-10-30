import { connect } from 'react-redux'
import { withFormik } from 'formik'
import {userActions, tasksActions} from './../../../../redux/actions/index'
import CreateTask from './CreateTask'


const CreateTaskForm = withFormik ({
  mapPropsToValues: () => ({
      taskName:  '',
      taskAssignee: '',
      datepickerinline:  new Date() ,
      timepicker: '',
      taskDiscription: '',
      priority: '',
}),
  // validate: (values, touched) => {
  //   let errors = {};
  //
  //   if (!values.email) {
  //     errors.email = 'Обязательно'
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
  //       values.email
  //     )
  //   ) {
  //     errors.email = 'Неверный формат'
  //     client.message  = 'Неверный формат'
  //     variants = 'warning'
  //   }
  //
  //
  //   return( errors ,variants, client )
  // },

  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    const payload = {
      ...values,
      taskAssignee: values.taskAssignee,
    };
    setTimeout(() => {
      console.log(payload);
      props.createTask({payload})
      resetForm()
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'CreateTaskForm',
})(CreateTask);

const mapStateToProps = (state) =>{
return{
  users : state.user.users,
  authorid :  state.user.data._id,
  athorname :state.user.data.name,
  }
}
const mapDispachToProps = (dispatch) =>{
  return {
    fetchAllUsers : (values) => dispatch(userActions.fetchAllUsers(values)),
    createTask: (payload)=>dispatch(tasksActions.createTask(payload))
  }
}

const CreateTaskContainer = connect (
  mapStateToProps ,
    mapDispachToProps
)(CreateTaskForm)

export default CreateTaskContainer
