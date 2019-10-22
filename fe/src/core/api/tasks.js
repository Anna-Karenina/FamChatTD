import { axios } from './../index'


export default{
  getAll: () => axios.get('/tasks'),
  newTask: (postData) => axios.post('/tasks', postData),
}
