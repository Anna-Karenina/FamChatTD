import { userApi } from '../../core/api'

const Actions = {
  setUserData: data => ({
    type: "USER:SET_DATA",
    payload: data
  }),
    fetchUserDataRepeat: (data) => dispatch => {
        console.log(data)
        dispatch(Actions.setUserData(data))
},
  fetchUserData: () => dispatch => {
    userApi.getMe().then(({ data }) => {
      dispatch(Actions.setUserData(data));
    });
  },
  fetchUserLogin: (postData) => dispatch => {
    return  userApi.login(postData).then(({data})=>{
      if (data.status === 'usererror' || data.status === "error" ) {
        return dispatch(Actions.setUserData(data))
      } else{
        const { token } = data
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
      }}).catch(({ response }) => {
        if (response.status === 403) {
          console.log('1')
        }
      });
  },
  fetchUserRegister: (postData) => dispatch => {
  return userApi.registration(postData).then(({data}) =>
    console.log(data))
  .catch( ({response}) => {
    if(response.status === 500) {
          dispatch(Actions.fetchUserDataRepeat(response.data ))
      }
    })
}

};
export default Actions
