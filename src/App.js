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
        <Route path="/search/:searchTerm">
        <div className="app__page">
            <Sidebar />
            <h2>Youtube does not have any API or Video Link to let me route to this page. So its Blank :)</h2>
            </div>
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
