import { axios } from './../index'

export default{
  getAll: () => axios.get('/dialogs'),
  newDialog: ({partner , text}) => axios.post('/dialogs', {partner , text})
}
