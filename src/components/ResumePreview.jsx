import "../styles/ResumePreview.css";

function ResumePreview({ personData }) {
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
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default ResumePreview;
