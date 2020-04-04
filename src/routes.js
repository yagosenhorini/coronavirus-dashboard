import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/section/index";
import Form from "./pages/form/index";

const Routes = props => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main api={props.value} />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
