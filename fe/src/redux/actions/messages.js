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
  fetchSendMessage: (text, dialogId, files) => dispatch => {
    messagesApi.newMessage(text, dialogId, files);
  },
  setIsLoading: bool => ({
    type: "MESSAGES:SET_IS_LOADING",
    payload: bool
  }),
  removeMessageById: id => dispatch => {
    if (window.confirm("Вы действительно хотите удалить сообщение?")) {
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
    } 
  },
  fetchMessages: dialogId => dispatch => {
    dispatch(Actions.setIsLoading(true))
     messagesApi
       .getAll(dialogId)
       .then(({ data }) => {
         dispatch(Actions.setMessages(data.messages));
          dispatch(Actions.setIsLoading(false));
       })
       .catch(() => {
        dispatch(Actions.setIsLoading(false));
       });
   }
};

export default Actions
