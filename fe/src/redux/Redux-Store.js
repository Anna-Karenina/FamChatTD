import { combineReducers, createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import dialogs from './reducers/dialogs'
import user from './reducers/user'
import message from './reducers/message'
import todo from './reducers/todo'

let bigfvckingreducer = combineReducers({
  dialogs,
  user,
  todo,
  message,

});
const reduxext = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
  bigfvckingreducer,
  reduxext(applyMiddleware(...middleware))
);
window.store = store

export default store;
