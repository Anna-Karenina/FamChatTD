import { axios } from './../index'

export default{
  login: (postData) => axios.post('/user/login', postData),
  getMe: () => axios.get('/user/me'),
  registration: (postData) => axios.post('user/registration', postData)
}
