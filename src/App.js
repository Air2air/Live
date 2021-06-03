import React from "react";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/header";
import Settings from "./pages/settings/settings";
import Topic from "./pages/topic/topic";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Topic />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
