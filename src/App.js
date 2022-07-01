import React from "react";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/contact" component={withRouter(Contact)} />

          <Route exact path="/" component={withRouter(Main)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
