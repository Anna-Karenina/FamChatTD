const initstate = {
<<<<<<< HEAD
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
=======
  items:[]
}

export default (state = initstate, { type , payload }) =>{
  switch (type) {
    case 'DIALOGS:SET_ITEMS':
      return {
        items: payload
      }
    default:
      return state

  }
}
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
