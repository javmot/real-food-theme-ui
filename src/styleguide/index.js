/** @jsx jsx */
import { jsx } from "theme-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Styled, Box } from "theme-ui";
import Sidebar from "./sidebar";
import Base from "./base";
import Forms from "./forms";
export default () => (
  <Router>
    <Grid gap={2} p={2} columns={[2, "200px 1fr"]}>
      <Sidebar paths={["/", "/forms"]} />
      <Box
        sx={{
          width: "80%",
        }}
      >
        <Switch>
          <Route exact path="/">
            <Styled.h1>Base Styles</Styled.h1>
            <Base />
          </Route>
          <Route exact path="/forms">
            <Styled.h1>Form Styles</Styled.h1>
            <Forms />
          </Route>
        </Switch>
      </Box>
    </Grid>
  </Router>
);
