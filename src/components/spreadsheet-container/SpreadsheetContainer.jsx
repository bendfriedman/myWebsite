import { Info } from "../../pages/info/Info";
import { Portfolio } from "../../pages/portfolio/Portfolio";
import "./SpreadsheetContainer.css";
import { Route, Routes } from "react-router-dom";

export const SpreadsheetContainer = () => {
  return (
    <div className="spreadSheetContainer">
      <div className="nav-bar">
        <div className="nav-section">
          <div>
            <i className="fa-solid fa-floppy-disk" />
          </div>
        </div>
        <div>UserInfo.xls</div>
        <div className="nav-actions nav-section">
          <div>
            <i className="fa-solid fa-window-minimize" />
          </div>
          <div>
            <i className="fa-regular fa-square" />
          </div>
          <div>
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="cell-ref">D10</div>
        <div className="function-input">fx</div>
      </div>

      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};
