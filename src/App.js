import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';

const App = (props) => {
  return (
   <BrowserRouter>
     <Route exact path= '/' component={Navbar} />
     <Route path= '/Login' component={Login}  />
  </ BrowserRouter>
  );
}

export default App;
