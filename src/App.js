import React from 'react';
import {Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <>
     <Route exact path= '/' component={Navbar} />
     <Route path= '/Login' component={Login}  />
     </>
  );
}

export default App;
