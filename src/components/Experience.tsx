import { experience } from '../helper';

function Experience() {
  return (
    <div className="experience">
        <br />
      {experience.map((exp, i) => (
        <div key={"company"+i}>
          <p className="company-name">&nbsp;&nbsp;{exp.company}</p>
          <p className="role">&nbsp;{exp.role}</p>
          <p className="info">{exp.duration}</p>
          {exp.responsibilities.map((r, j) => (
            <p key={'responsibilities'+j} className="info">└── {r}</p>
          ))}
          {i !== experience.length - 1 && <br />}
        </div>
      ))}
      <br />
    </div>
  );
}

export default Experience;
