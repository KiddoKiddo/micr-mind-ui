import React from "react";
import { render } from "react-dom";
import Conversation from "./components/Conversation";

require("./index.css");

const App = () => (
  <div>
    <Conversation />
  </div>
);

render(<App />, document.getElementById("root"));
