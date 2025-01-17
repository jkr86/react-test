import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "./styles.css"; 
import App from "./App";

const rootElement = document.getElementById("root");
const root = rootElement && ReactDOMClient.createRoot(rootElement);

root &&
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
