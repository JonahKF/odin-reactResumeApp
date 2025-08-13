import CustomInput from "./CustomInput.jsx";
import "../styles/WorkInfo.css";

function WorkInfo({ personData, onChange }) {
  return (
    <div className="work-info info-card">
      <h2>Work Info</h2>

      <CustomInput
        field="jobTitle"
        value={personData.jobTitle}
        onChange={onChange}
      />
    </div>
  );
}

export default WorkInfo;
