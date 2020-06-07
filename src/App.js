import React from 'react';
import {Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';
import Home from './components';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
    <CssBaseline/>
    <Route path= '/' exact strict component={Home}/>
    <Route path= '/resume' exact strict component={Resume}/>
    <Route path= '/portfolio' exact strict component={Portfolio}/>
    <Route path= '/contacts' exact strict component={Contacts}/>
   </>
  );
}

export default App;
