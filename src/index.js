import React from "react";
import ReactDOM from "react-dom";
import Box from "./Box";
import Draggable from "./Draggable";

ReactDOM.render(
  <Draggable>
    <Box />
  </Draggable>,
  document.getElementById("root")
);
