import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import SignUp from "./SignUp";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={IndexPage} exact />
      <Route path="/signup" component={SignUp} exact />
    </Switch>
  );
}

export default Routes;
