import "../styles/ResumePreview.css";

function ResumePreview({ personData }) {
  const skillCategories = Object.keys(personData.skills);
  const companiesWorked = Object.keys(personData.experience);

  return (
    <div className="resume-preview">
      <h1 className="resume-name">
        {personData.firstName} {personData.lastName}
      </h1>

      <h2 className="job-title">{personData.jobTitle}</h2>

      <div className="contact-and-location">
        {personData.phone} {personData.email} {personData.location}
      </div>

      <div className="summary-container">
        <h3>Summary</h3>
        <div>{personData.summary}</div>
      </div>

      <div className="experience-container">
        <h3>Experience</h3>
        {companiesWorked.map((company) => (
          <div key={company} className="company-container">
            <h4>{company}:</h4>
            <div>{personData.experience[company].position}</div>
            <div>
              {personData.experience[company].startYear} -{" "}
              {personData.experience[company].endYear}
            </div>
            <div>{company.description}</div>
            <ul>
              {personData.experience[company].points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="education-container">
        <h3>Education</h3>
      </div>

      <div className="skills-container">
        <h3>Skills</h3>
        {skillCategories.map((category) => (
          <ul key={category} className="skill-category">
            <h4>{category}:</h4>
            <span>
              {personData.skills[category].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </span>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ResumePreview;
