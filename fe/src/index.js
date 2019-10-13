import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/Redux-Store'
<<<<<<< HEAD
import { userActions} from './redux/actions/index';

store.dispatch(userActions.fetchUserData())
=======



>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927

ReactDOM.render(
 <Provider store={store}>
   <Router>
       <App />
   </Router>
 </Provider>
, document.getElementById('root'));
