import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Correct import for createRoot
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./components/DataProvider/DataProvider.jsx";
import { initialState, reducer } from "./utility/reducer.js";

// Create a root and render the application using ReactDOM.createRoot()
const root = createRoot(document.getElementById("root")); // Using createRoot for React 18

root.render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>
);
