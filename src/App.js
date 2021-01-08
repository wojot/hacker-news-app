import React, { useState } from "react";
import StoriesList from "./components/StoriesList";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [sort, setSort] = useState("");

  return (
    <>
      <Header sortProp={setSort} />

      <div className="App">
        <Router>
          <Switch>
            <Route path="/new">
              <StoriesList path="/new" sortProp={sort} />
            </Route>
            <Route path="/top">
              <StoriesList path="/top" sortProp={sort} />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
