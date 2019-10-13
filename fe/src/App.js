import React from 'react';
import  { Route, Redirect } from "react-router-dom";
import  { connect } from "react-redux";
import Template from './components/Template/Template';
import Auth from './components/Auth/Auth';
<<<<<<< HEAD
import ChatContainer from './components/Chat/OneChat/Chat';



const App = (props) => {
  const {isAuth }=props

=======


const App = (props) => {
  const {isAuth}=props
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
 return (
   <>
    { isAuth ?  <Redirect to="/app"/> :<Redirect to="/login"/>  }

   <Route exact path= {['/', "/login" , '/Registration', '/Registration/verification', '/ForgetPass']} component={isAuth ? Template : Auth } />



<<<<<<< HEAD
   <Route exact path= {[ '/', '/app' ,  '/todos', '/dialogs' , '/settings']} component={Template} />

  <Route  path= '/messages' component={ChatContainer} />
    </>
  );
}
export default connect(({ user }) => ({ isAuth: user.isAuth }), null )(App);;
=======
   <Route exact path= {[ '/', '/app' ,  '/todos', '/dialogs' ,'/messages', '/settings']} component={Template} />


    </>
  );
}
export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);;
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
