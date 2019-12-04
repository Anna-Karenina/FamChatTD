import { axios } from './../index'

export default{
  getAllTasks: () => axios.get('/tasks/getall'),
  getMyTasks: () => axios.get('/tasks/getmytasks'),
  newTask: (postData) => axios.post('/tasks', postData),
}
