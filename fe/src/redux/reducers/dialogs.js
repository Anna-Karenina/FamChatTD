const initstate = {
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
