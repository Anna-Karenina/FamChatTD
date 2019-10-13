import { dialogsApi } from './../../core/api/index'

const Actions = {
  setDialogs: items => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items
  }),
  setCurrentDialogId: currentDialog => ({
    type: "DIALOGS:SET_CURRENT_DIALOG_ID",
    payload: currentDialog
  }),
  fetchDialogs: () => dispatch => {
    dialogsApi.getAll().then(({ data }) => {
      dispatch(Actions.setDialogs(data));
    });
  }
};

export default Actions
