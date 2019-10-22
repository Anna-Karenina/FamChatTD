import { combineReducers, createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import dialogs from './reducers/dialogs'
import user from './reducers/user'
import message from './reducers/message'
import tasks from './reducers/tasks'

let bigfvckingreducer = combineReducers({
  dialogs,
  user,
  tasks,
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
