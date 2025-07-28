import { useState } from "react";
import "../styles/App.css";
import GeneralInfo from "./GeneralInfo.jsx";
import EduInfo from "./EduInfo.jsx";
import WorkInfo from "./WorkInfo.jsx";
import ResumePreview from "./ResumePreview.jsx";

function App() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Placeholder",
    email: "example@email.com",
    phone: "123-456-7890",
  });

  const handlePersonChange = (field, value) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      [field]: value,
    }));
  };

  return (
    <>
      <div className="app-container">
        <div className="left-panel">
          <GeneralInfo personData={person} onChange={handlePersonChange} />
          <EduInfo personData={person} onChange={handlePersonChange} />
          <WorkInfo personData={person} onChange={handlePersonChange} />
        </div>
        <div className="preview-container">
          <ResumePreview personData={person} />
        </div>
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
