const initialState = {
  items: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FILES:SET_ITEMS":
      return {
        ...state,
        items: payload
      };
    default:
      return state;
  }
};
