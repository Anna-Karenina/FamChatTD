import { dialogsApi } from './../../core/api/index'

const Actions = {
  setDialogs: items => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items
  }),
  setCurrentDialogId: id => ({
    type: "DIALOGS:SET_CURRENT_DIALOG_ID",
    payload: id
  }),
  fetchDialogs: () => dispatch => {
    dialogsApi.getAll().then(({ data }) => {
        console.log('1')
      dispatch(Actions.setDialogs(data));
    });
  }
};

export default Actions
