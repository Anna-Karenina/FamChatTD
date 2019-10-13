import { axios } from './../index'

export default{
  getAll: id => axios.get('/messages?dialog=' + id),
<<<<<<< HEAD
  newMessage: (text, dialogId) =>
  axios.post("/messages", {
    text: text,
    dialog_id: dialogId
  })
=======
  newMessage: ({dialogId, text}) => axios.post('/messages', { dialog_id: dialogId , text: text})
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
}
