import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SpreadsheetContainer } from "./components/spreadsheet-container/SpreadsheetContainer";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<SpreadsheetContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
