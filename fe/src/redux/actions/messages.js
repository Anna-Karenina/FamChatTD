import { messagesApi } from './../../core/api/index'

const Actions = {
  setMessages: items => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items
  }),
  addMessage: message => (dispatch, getState) => {
    const { dialogs } = getState();
    const { currentDialogId } = dialogs;
<<<<<<< HEAD
      if (currentDialogId === message.dialog._id) {
        dispatch({
          type: "MESSAGES:ADD_MESSAGE",
          payload: message
        });
      }
  },
  fetchSendMessage: (text, dialogId) => dispatch => {
    messagesApi.newMessage(text, dialogId);
=======

    if (currentDialogId === message.dialog._id) {
      dispatch({
        type: "MESSAGES:ADD_MESSAGE",
        payload: message
      });
    }
  },
  fetchSendMessage: (text, dialogId) => dispatch => {
    messagesApi.send(text, dialogId);
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
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
<<<<<<< HEAD
    dispatch(Actions.setIsLoading(true))
     messagesApi
       .getAll(dialogId)
       .then(({ data }) => {
         dispatch(Actions.setMessages(data));
          dispatch(Actions.setIsLoading(false));
       })
       .catch(() => {
        dispatch(Actions.setIsLoading(false));
=======
     messagesApi
       .getAll(dialogId)
       .then(({ data }) => {
          console.log("я в акшене")
         dispatch(Actions.setMessages(data));
       })
       .catch(() => {
         console.log(2)
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
       });
   }
};

export default Actions
