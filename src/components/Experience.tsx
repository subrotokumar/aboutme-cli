import { experience } from '../helper';

function Experience() {
  return (
    <div className="experience">
      <br />
      {experience.map((exp, i) => (
        <div key={"company" + i}>
          <p className="company-name">&nbsp;&nbsp;{exp.company}</p>
          {exp.position.map((position, j) => (<>
            <p className="role">&nbsp;{position.role}</p>
            <p className="info">{position.duration}</p>
            {position.responsibilities.map((r, k) => (
              <p key={'responsibilities' + j} className="info">└── {r}</p>
            ))}
          </>))}
          {i !== experience.length - 1 && <br />}
        </div>
      ))}
      <br />
    </div>
  );
}

export default Experience;
