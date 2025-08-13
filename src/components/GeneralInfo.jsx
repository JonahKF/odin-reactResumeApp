import CustomInput from "./CustomInput.jsx";
import "../styles/GeneralInfo.css";

function GeneralInfo({ personData, onChange }) {
  return (
    <div className="general-info info-card">
      <h2>General Information</h2>

      <div className="name-input">
        <CustomInput
          field="firstName"
          value={personData.firstName}
          onChange={onChange}
        />

        <CustomInput
          field="lastName"
          value={personData.lastName}
          onChange={onChange}
        />
      </div>

      <CustomInput
        field="jobTitle"
        value={personData.jobTitle}
        onChange={onChange}
      />

      <CustomInput field="phone" value={personData.phone} onChange={onChange} />

      <CustomInput field="email" value={personData.email} onChange={onChange} />

      <CustomInput
        field="location"
        value={personData.location}
        onChange={onChange}
      />
    </div>
  );
}

export default GeneralInfo;
