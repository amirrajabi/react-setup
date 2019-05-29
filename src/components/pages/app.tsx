import React, { Component } from "react";
import Loadable from "react-loadable";
import { Router, Link, RouteComponentProps } from "@reach/router";
import { Global, css } from "@emotion/core";

import Home from "./home";

const LoadablePage2 = Loadable({
  loader: () => import("./page2"),
  loading() {
    return <h1>Loading Split out code...</h1>;
  }
});

class App extends Component<RouteComponentProps> {
  public componentDidMount() {
    console.log("Tsx did mount!");
  }

  public render() {
    return (
      <div className="App">
        <Global
          styles={css`
            * {
              padding: 10px;
            }
          `}
        />
<<<<<<< Updated upstream
        <h1>Hello my friend (Typescript Project)!</h1>
=======
        <h1>Hello my friend!</h1>
>>>>>>> Stashed changes
        <Link to="/">Home</Link>
        <Link to="/page2/1234">Page2</Link>
        <Router>
          <Home path="/" />
          <LoadablePage2 path="/page2/:id" />
        </Router>
      </div>
    );
  }
}

export default App;
