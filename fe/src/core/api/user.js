import { axios } from './../index'

export default{
  login: (postData) => axios.post('/user/login', postData),
  getMe: () => axios.get('/user/me'),
<<<<<<< HEAD
  registration: (postData) => axios.post('user/registration', postData),
  allUsers: query => axios.get("/user/allUsers?query=" + query)
=======
  registration: (postData) => axios.post('user/registration', postData)
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
}
