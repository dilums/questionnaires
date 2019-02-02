import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";


class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}
export default Router;
