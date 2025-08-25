import CustomInput from "./CustomInput.jsx";
import "../styles/EduInfo.css";

function EduInfo({ personData, onChange }) {
  const universitiesAttended = Object.keys(personData.education);

  return (
    <div className="edu-info info-card">
      <h2>Edu Info</h2>

      <CustomInput
        field="jobTitle"
        value={personData.jobTitle}
        onChange={onChange}
      />
    </div>
  );
}

export default EduInfo;
