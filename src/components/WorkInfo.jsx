import CustomInput from "./CustomInput.jsx";
import "../styles/WorkInfo.css";

function WorkInfo({ personData, onChange, onPointChange }) {
  const skillCategories = Object.keys(personData.skills);
  const companiesWorked = Object.keys(personData.experience);
  // console.log(personData);

  return (
    <div className="work-info info-card">
      <h2>Work Info</h2>

      {companiesWorked.map((company) => (
        <div key={company} className="company-container-input">
          <h3>{company}</h3>
          <CustomInput
            field="position"
            value={personData.experience[company].position}
            onChange={(field, value) => onChange(company, field, value)}
          />
          <div>
            <CustomInput
              field="startYear"
              value={personData.experience[company].startYear}
              onChange={(field, value) => onChange(company, field, value)}
            />
            <CustomInput
              field="endYear"
              value={personData.experience[company].endYear}
              onChange={(field, value) => onChange(company, field, value)}
            />
          </div>
          <CustomInput
            field="description"
            value={personData.experience[company].description}
            onChange={(field, value) => onChange(company, field, value)}
          />
          {personData.experience[company].points.map((point, index) => (
            <CustomInput
              field={index}
              value={point}
              onChange={(_, newValue) =>
                onPointChange(company, index, newValue)
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default WorkInfo;
