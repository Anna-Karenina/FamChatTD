import { axios } from './../index'

export default{
  getAll: id => axios.get('/messages?dialog=' + id),
  newMessage: ({dialogId, text}) => axios.post('/messages', { dialog_id: dialogId , text: text})
}
