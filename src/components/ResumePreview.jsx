import "../styles/ResumePreview.css";

function ResumePreview({ personData }) {
  return (
    <div className="resume-preview">
      <h1>
        {personData.firstName} {personData.lastName}
      </h1>
    </div>
  );
}

export default ResumePreview;
