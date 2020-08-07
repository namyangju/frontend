import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from "./IndexPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={IndexPage} exact />
    </Switch>
  );
}

export default Routes;
