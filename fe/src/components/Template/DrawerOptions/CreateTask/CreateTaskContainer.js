import { connect } from 'react-redux'
import { withFormik } from 'formik'
import {userActions, tasksActions} from './../../../../redux/actions/index'
import CreateTask from './CreateTask'


const CreateTaskForm = withFormik ({
  mapPropsToValues: () => ({
      taskName:  '',
      taskAssignee: '',
      toAll: '',
      datepickerinline:  new Date() ,
      taskDiscription: '',
      priority: '',
}),
  validate: (values, touched) => {
    let errors = {};

    if (!values.taskName) {
      errors.taskName = 'Обязательно'
    }

    else if (!values.datepickerinline) {
      errors.datepickerinline = 'Обязательно'
    }
    else if (!values.taskDiscription) {
      errors.taskDiscription = 'Обязательно'
    }
    else if (!values.priority) {
      errors.priority = 'Обязательно'
    }


    return errors
  },

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
