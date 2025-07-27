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
      <footer>
        <div>Designed by Jonah Kachur</div>
        <div>・ </div>
        <a href="https://github.com/JonahKF">
          <i class="devicon-github-original"></i>
        </a>
      </footer>
    </>
  );
}

export default App;
