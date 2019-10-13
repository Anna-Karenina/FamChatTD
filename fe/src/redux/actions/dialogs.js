import { dialogsApi } from './../../core/api/index'

const Actions = {
  setDialogs: items => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items
  }),
<<<<<<< HEAD
  setCurrentDialogId: currentDialog => ({
    type: "DIALOGS:SET_CURRENT_DIALOG_ID",
    payload: currentDialog
  }),
  fetchDialogs: () => dispatch => {
    dialogsApi.getAll().then(({ data }) => {
=======
  setCurrentDialogId: id => ({
    type: "DIALOGS:SET_CURRENT_DIALOG_ID",
    payload: id
  }),
  fetchDialogs: () => dispatch => {
    dialogsApi.getAll().then(({ data }) => {
        console.log('1')
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
      dispatch(Actions.setDialogs(data));
    });
  }
};

export default Actions
