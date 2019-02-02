import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Item from "./components/qa/Item";
import About from "./components/pages/About";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/conversation/:id" component={Item} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
export default Router;
