import "../styles/ResumePreview.css";

function ResumePreview({ personData }) {
  const skillCategories = Object.keys(personData.skills);

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

      <div className="experience-container">
        <h3>Experience</h3>
      </div>
    </div>
  );
}

export default ResumePreview;
