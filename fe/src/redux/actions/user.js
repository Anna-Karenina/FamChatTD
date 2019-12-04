import { userApi } from '../../core/api'

const Actions = {
  setUserData: data => ({
    type: "USER:SET_DATA",
    payload: data
  }),
  fetchUserLogout: (bool) => dispatch =>({
    type: 'USER:SET_IS_AUTH',
    payload: bool
  }),
  setUsersData: data => ({
    type: "USER:SET_USERS_DATA",
    payload: data
  }),
  setUsersAvatar: data => ({
    type: "USER:UPDATE_USER_AVATAR",
    payload: data
  }),
  fetchUserDataRepeat: (data) => dispatch => {
    console.log(data)
    dispatch(Actions.setUserData(data))
  },
  fetchUserData: () => dispatch => {
    userApi.getMe().then(({ data }) => {
        if(data === null){
          return (
            delete window.localStorage.token,
            delete window.localStorage.ulid
            )
        }else{
          const ulid = data.id
          window.localStorage["ulid"] = ulid;
        dispatch(Actions.setUserData(data));
        }
    });
  },
  fetchUserLogin: (postData) => dispatch => {
    return  userApi.login(postData).then(({data})=>{
      if (data.status === "error" ) {
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
    console.log(data)
      )
      .catch( ({response}) => {
        if(response.status === 500) {
          dispatch(Actions.fetchUserDataRepeat(response.data ))
        }
      })
    },

    fetchAllUsers: () => dispatch => {
      return userApi.getAllUsers().then(({data}) => {
        data.map(i =>  (i.label = i.name,  i.key=i._id, i.value=i.name))
        console.log(data)
        dispatch(Actions.setUsersData(data))
      })
    },
    fetchAllUsersForNewDialogs: () => dispatch => {
      return userApi.getAllUsers().then(({data}) => {
        let newdata = data.filter(i => i._id !== window.localStorage.ulid)
        dispatch(Actions.setUsersData(newdata))
      })
    },
    userUpdateAvatar: file => dispatch => {
      return userApi.upLoadAvatar(file).then(({data})=>{
          dispatch(Actions.setUsersAvatar(data))
      })
    }

  };
  export default Actions
