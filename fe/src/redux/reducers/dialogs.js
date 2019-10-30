const initstate = {
items: [],
currentDialogId: window.location.pathname.split("dialog/")[1],
isLoading: false
};

export default (state = initstate, { type, payload }) => {
  switch (type) {
    case "DIALOGS:SET_ITEMS":
      return {
        ...state,
        items: payload
      };
    case "DIALOGS:SET_CURRENT_DIALOG_ID":
      return {
        ...state,
        currentDialogId: payload.id,
        currentPartner: payload.choosenPartner
      };
      case 'DIALOGS:LAST_MESSAGE_READED_STATUS':
        return {
          ...state,
          items: state.items.map(dialog => {
            if (dialog._id === payload.dialogId) {
              dialog.lastMessage.readed = true;
            }
            return dialog;
          }),
        };
    default:
      return state;
  }
};
