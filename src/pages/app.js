import React from "react";
import { Router, Link } from "@reach/router";

import Home from "./home";
import Page2 from "./page2";

const App = () => {
  return (
    <div className="App">
      <h1>Hello my friend!</h1>
      <Link to="/">Home</Link>
      <Link to="/page2/1234">Page2</Link>
      <Router>
        <Home path="/" />
        <Page2 path="/page2/:id" />
      </Router>
    </div>
  );
};

export default App;

/*
redirect in @reach/router is {navigate("/")}
*/

/*
  onBlur using for select.option in form
*/

/*
  using portal in new react {more flexebility}
*/

/*
  rm -rf .cache/ dist/
*/

/*
//eslint-disable-next-line
*/
