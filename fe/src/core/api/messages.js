import { axios } from './../index'

export default{
  getAll: id => axios.get('/messages?dialog=' + id),
  newMessage: (text, dialogId) =>
  axios.post("/messages", {
    text: text,
    dialog_id: dialogId
  })
}
