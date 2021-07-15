import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Header from "./components/Header";
import Save from "./pages/Save";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Header />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Search />
          </Route>
          <Route exact path="/save">
            <Save />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
