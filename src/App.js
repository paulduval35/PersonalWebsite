import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import Contact from './pages/Contact';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/contact" component={Contact} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
