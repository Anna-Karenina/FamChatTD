import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/Redux-Store'
import { userActions} from './redux/actions/index';

store.dispatch(userActions.fetchUserData())

ReactDOM.render(
 <Provider store={store}>
   <Router>
       <App />
   </Router>
 </Provider>
, document.getElementById('root'));
