import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Index from './page/index.jsx'


function App() {
  return (
    <BrowserRouter>
    <div className="App flex justify-center">
      <Switch>
        <Route exact path='/' component={Index}/>
      </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
