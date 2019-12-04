import { axios } from './../index'

export default{
  login: (postData) => axios.post('/user/login', postData),
  verifyHash: hash => axios.get("/user/verify?hash=" + hash),
  getMe: () => axios.get('/user/me'),
  registration: (postData) => axios.post('user/registration', postData),
  getAllUsers: query => axios.get("/user/allUsers?query="),
  getOnlyOneUser: id => axios.get('/user?id=' + id),
  upLoadAvatar: file => {
      const formData = new FormData();
      formData.append("file", file);
      return axios.post("/user/avatarupload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
    }
}
