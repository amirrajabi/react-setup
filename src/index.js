import React from "react";
import { render } from "react-dom";

import App from "./pages/app";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

/*
using .env key:
process.env.GRAPHQL_URI
*/
