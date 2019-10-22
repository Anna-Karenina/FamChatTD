import { tasksApi } from './../../core/api/index'

const Actions = {
  setTasks: items => ({
    type: "TASKS:SET_ITEMS",
    payload: items
  }),
   createTask: (postData) => dispatch => {
        console.log(postData)
        tasksApi.newTask(postData).then(({items}) =>
      console.log(items))
  },
}
export default Actions
