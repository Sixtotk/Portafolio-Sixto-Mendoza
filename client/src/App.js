import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
    <div className="App flex justify-center">
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
