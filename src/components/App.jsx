// import { useState } from "react";
import "../styles/App.css";
import GeneralInfo from "./GeneralInfo.jsx";
import EduInfo from "./EduInfo.jsx";
import WorkInfo from "./WorkInfo.jsx";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="left-panel">
          <GeneralInfo />
          <EduInfo />
          <WorkInfo />
        </div>
        <div className="preview-container"></div>
      </div>
      <footer>Designed by Jonah Kachur ・ github</footer>
    </>
  );
}

export default App;
