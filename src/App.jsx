import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SpreadsheetContainer } from "./components/spreadsheet-container/SpreadsheetContainer";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div id="app">
      <SpreadsheetContainer />
    </div>
  );
}

export default App;
