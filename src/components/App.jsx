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
    jobTitle: "Marketing Manager",
    email: "example@email.com",
    phone: "123-456-7890",
    location: "New York, NY",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat et sem ut aliquam. Donec fermentum pharetra massa, ut ullamcorper diam ultricies nec. In felis dui, efficitur ac gravida sed, finibus et odio. Quisque a efficitur magna. Proin in aliquam odio. Morbi ultrices, diam eget consectetur convallis, dolor nisl semper nisi, nec posuere nulla magna in magna.",
    skills: {
      "Front-End": ["React", "CSS", "HTML5"],
      "Back-End": ["Node.js", "Express", "PostgreSQL"],
      "Dev-Tools": ["Git", "Webpack", "Docker"],
    },
    experience: {
      "Placeholder Corp": {
        position: "Full Stack Developer",
        startYear: "2018",
        endYear: "Ongoing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat et sem ut aliquam. Donec fermentum pharetra massa, ut ullamcorper diam ultricies nec. In felis dui, efficitur ac gravida sed, finibus et odio. Quisque a efficitur magna.",
        points: [
          "Hired, trained and leading an Agile team of 4 full-stack developers.",
          "Developed indexed SQL database for 8 applications.",
          "Increased company revenue by 10% within 2 months after implementation of business logic.",
        ],
      },
      "Blank Inc.": {
        position: "Full Stack Engineer",
        startYear: "2015",
        endYear: "2018",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat et sem ut aliquam. Donec fermentum pharetra massa, ut ullamcorper diam ultricies nec. In felis dui, efficitur ac gravida sed, finibus et odio. Quisque a efficitur magna.",
        points: [
          "Hired, trained and leading an Agile team of 3 full-stack developers.",
          "Developed indexed SQL database for 6 applications.",
        ],
      },
    },
  });

  const handlePersonChange = (field, value) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      [field]: value,
    }));
  };

  console.log({ person });

  return (
    <>
      <div className="app-container">
        <div className="left-panel">
          <GeneralInfo personData={person} onChange={handlePersonChange} />
          <WorkInfo personData={person} onChange={handlePersonChange} />
          <EduInfo personData={person} onChange={handlePersonChange} />
        </div>
        <div className="preview-container">
          <ResumePreview personData={person} />
        </div>
      </div>
      <footer>
        <div>Designed by Jonah Kachur</div>
        <a href="https://github.com/JonahKF">
          <i className="devicon-github-original"></i>
        </a>
      </footer>
    </>
  );
}

export default App;
