import React from 'react';
import  { Route, Redirect } from "react-router-dom";
import  { connect } from "react-redux";
import Template from './components/Template/Template';
import Auth from './components/Auth/Auth';
import ChatContainer from './components/Chat/OneChat/Chat';



const App = (props) => {
  const {isAuth }=props

 return (
   <>
    { isAuth ?  <Redirect to="/app"/> :<Redirect to="/login"/>  }

   <Route exact path= {['/', "/login" , '/Registration', '/Registration/verification', '/ForgetPass']} component={isAuth ? Template : Auth } />



   <Route exact path= {[ '/', '/app' ,  '/todos', '/dialogs' , '/settings']} component={Template} />

  <Route  path= '/messages' component={ChatContainer} />
    </>
  );
}
export default connect(({ user }) => ({ isAuth: user.isAuth }), null )(App);;
