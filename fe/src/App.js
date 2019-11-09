import React,{ useEffect } from 'react';
import  { Route, Redirect } from "react-router-dom";
import  { connect } from "react-redux";
import Template from './components/Template/Template';
import Auth from './components/Auth/Auth';
import store from './redux/Redux-Store'
import { userActions} from './redux/actions/index';
import ChatContainer from './components/Dialogs/Chat/Chat';

const App = ({isAuth}) => {

  useEffect(()=>{
    if(isAuth){
       store.dispatch(userActions.fetchUserData())
   }else  return undefined
  },[isAuth])

 return (
   <>
    { isAuth ?  <Redirect to="/app"/> :<Redirect to="/login"/>  }
   <Route exact path= {[
       '/',
        "/login" ,
         '/user/registration',
          '/user/verify',
           '/user/forgetpass'
         ]} component={isAuth ? Template : Auth } />

   <Route exact path= {[
        '/',
        '/app' ,
        '/tasks',
        '/dialogs' ,
        '/settings'
      ]} component={Template} />

  <Route  path= '/messages' component={ChatContainer} />
    </>
  );
}
export default connect( ({ user }) => ({ isAuth: user.isAuth }) )(App)
