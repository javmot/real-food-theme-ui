import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Styled } from "theme-ui";
import Sidebar from "./sidebar";
import Base from "./base";
export default () => (
  <Router>
    <Grid gap={2} p={2} columns={[2, "200px 1fr"]}>
      <Sidebar paths={["/", "/forms"]} />
      <div>
        <Styled.h1>Style Guide</Styled.h1>
        <Switch>
          <Route exact path="/">
            <Base />
          </Route>
        </Switch>
      </div>
    </Grid>
  </Router>
);
