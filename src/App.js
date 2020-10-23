import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from "./Sidebar"
import Recommended from "./Recommended"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Switch>
        <Route path="/search">
          <h1>search page</h1>
        </Route>
        <Route path="/">
          <div className="app__page">
            <Sidebar />
            <Recommended />
          </div>
        </Route>
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
