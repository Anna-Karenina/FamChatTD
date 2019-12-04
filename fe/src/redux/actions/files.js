const Actions = {
  setFiles: items => ({
    type: "FILES:SET_ITEMS",
    payload: items
  }),
  addFiles: files => dispatch => {
    console.log(files ,'тут')
      dispatch(Actions.setFiles(files))
  }
}

export default Actions;
