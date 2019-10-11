import { messagesApi } from './../../core/api/index'

const Actions = {
  setMessages: items => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items
  }),
  addMessage: message => (dispatch, getState) => {
    const { dialogs } = getState();
    const { currentDialogId } = dialogs;

    if (currentDialogId === message.dialog._id) {
      dispatch({
        type: "MESSAGES:ADD_MESSAGE",
        payload: message
      });
    }
  },
  fetchSendMessage: (text, dialogId) => dispatch => {
    messagesApi.send(text, dialogId);
  },
  setIsLoading: bool => ({
    type: "MESSAGES:SET_IS_LOADING",
    payload: bool
  }),
  removeMessageById: id => dispatch => {
    messagesApi
      .removeById(id)
      .then(({ data }) => {
        dispatch({
          type: "MESSAGES:REMOVE_MESSAGE",
          payload: id
        });
      })
      .catch(() => {
        dispatch(Actions.setIsLoading(false));
      });
  },
  fetchMessages: dialogId => dispatch => {
     messagesApi
       .getAll(dialogId)
       .then(({ data }) => {
          console.log("я в акшене")
         dispatch(Actions.setMessages(data));
       })
       .catch(() => {
         console.log(2)
       });
   }
};

export default Actions
