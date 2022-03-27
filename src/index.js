import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode="light"></ColorModeScript>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
