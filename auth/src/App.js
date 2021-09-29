import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import { Switch, Route, Router } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <SignUp onSignIn={onSignIn} />
            </Route>
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};
