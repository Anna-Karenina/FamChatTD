import { axios } from './../index'

export default{
  getAll: id => axios.get('/messages?dialog=' + id),
  newMessage: (text, dialogId, files) =>
  axios.post("/messages", {
    text: text,
    dialog_id: dialogId,
    files
  }),
  removeById: id => axios.delete("/messages?id=" + id),
}
