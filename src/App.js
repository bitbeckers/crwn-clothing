import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homepage/homepage.component";

const HatsPage = () => {
  return (
    <div>
      <h>HatsPage</h>
    </div>
  )
  
}


function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/hats" component={HatsPage} />
        </Switch>
      </div>
  );
}

export default App;
