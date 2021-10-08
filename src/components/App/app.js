import React from 'react';
import './app.css';
import SearchBar from "../SearchBar/index";
import {
  Switch,
  Route,
} from "react-router-dom";
import Product from "../Product/index";


const App = () => {
  return (
        <div className="App">
          <Switch>
            <Route path="/" exact component={SearchBar} />
            <Route path="/Product/:id" component={Product} />
          </Switch>
        </div>
  )
};

export default App;