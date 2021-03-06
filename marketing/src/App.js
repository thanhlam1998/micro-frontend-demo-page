import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import { Switch, Route, Router } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};
