import { axios } from './../index'


export default{
  getAll: () => axios.get('/tasks/getall'),
  getTeamTasks: () => axios.get('/tasks/getteamtasks'),
  newTask: (postData) => axios.post('/tasks', postData),
}
