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
        currentPartner: payload.partner
      };
    default:
      return state;
  }
};
