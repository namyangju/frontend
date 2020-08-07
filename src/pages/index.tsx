import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUpPage";
import LoginPage from "./LoginPage";
import IndexPage from "./IndexPage";
import WritePage from "./WritePage";
import BidListPage from "./BidListPage";
import ProfilePage from "./ProfilePage";
import ProjectWritePage from "./ProjectWritePage";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={IndexPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/write" component={WritePage} exact />
      <Route path="/bid" component={BidListPage} exact />
      <Route path="/profile" component={ProfilePage} exact />
      <Route path="/write-project" component={ProjectWritePage} exact />
    </Switch>
  );
}

export default Routes;
