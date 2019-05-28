import React from "react";
import { hydrate, render } from "react-dom";

import Index from "./index";

const rootElement = document.getElementById("root");

if (process.env.NODE_ENV === "development") {
  render(<Index />, rootElement);
} else {
  hydrate(<Index />, rootElement);
}
