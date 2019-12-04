import { tasksApi } from './../../core/api/index'

const Actions = {
  setTasks: items => ({
    type: "TASKS:SET_ITEMS",
    payload: items
  }),
  createTask: (postData) => dispatch => {
       tasksApi.newTask(postData)
        .then(({data}) =>{
          console.log(data);
        })
 },
  fetchAllTasks: (postData) => dispatch => {
       tasksApi.getAllTasks()
        .then(({data}) =>{
          let items = data
        dispatch(Actions.setTasks(items));
        })
 },
  fetchUserTasks: (postData) => dispatch => {
       tasksApi.getMyTasks()
        .then(({data}) =>{
            console.log(data)
          let items = data
        dispatch(Actions.setTasks(items));
        })
 },
}
export default Actions
