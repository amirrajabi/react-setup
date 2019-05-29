import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

import App from "./components/pages/app";

const store = configureStore();

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Index;

/*
using .env key:
process.env.GRAPHQL_URI
*/

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
