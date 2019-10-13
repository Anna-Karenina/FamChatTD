const initstate = {
  data:[],
  token: window.localStorage.token,
<<<<<<< HEAD
  isAuth: !!window.localStorage.token,
  ulid : window.localStorage.ulid
=======
  isAuth: !!window.localStorage.token
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
}

export default (state = initstate, { type , payload }) =>{
  switch (type) {
    case 'USER:SET_DATA':
      return {
        data: payload,
<<<<<<< HEAD
        isAuth: !!window.localStorage.token,
=======
        isAuth: !!window.localStorage.token
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
      }
    case 'USER:SET_IS_AUTH':
      return {
        ...state,
        isAuth: payload
    }
    default:
      return state
  }
}
// svrdetwa@mail.ru

	//		"89516623438s"
