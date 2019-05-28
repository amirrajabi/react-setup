import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import App from "./pages/app";

const store = configureStore();

const rootElement = document.getElementById("root");

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
render(<Root />, rootElement);

/*
using .env key:
process.env.GRAPHQL_URI
*/
