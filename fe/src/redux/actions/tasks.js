import { tasksApi } from './../../core/api/index'

const Actions = {
  setTasks: items => ({
    type: "TASKS:SET_ITEMS",
    payload: items
  }),
  createTask: (postData) => dispatch => {
       tasksApi.newTask(postData)
        .then(({data}) =>{
          let items = data
        dispatch(Actions.setTasks(items));
        })
 },
}
export default Actions
