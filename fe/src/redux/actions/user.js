import { userApi } from '../../core/api'

const Actions = {
  setUserData: data => ({
    type: "USER:SET_DATA",
    payload: data
  }),
<<<<<<< HEAD
  fetchUserDataRepeat: (data) => dispatch => {
    console.log(data)
    dispatch(Actions.setUserData(data))
  },
  fetchUserData: () => dispatch => {
    userApi.getMe().then(({ data }) => {
      const ulid = data.id
        window.localStorage["ulid"] = ulid;
=======
    fetchUserDataRepeat: (data) => dispatch => {
        console.log(data)
        dispatch(Actions.setUserData(data))
},
  fetchUserData: () => dispatch => {
    userApi.getMe().then(({ data }) => {
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
