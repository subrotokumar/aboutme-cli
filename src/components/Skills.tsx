import { FC } from "react";
import { skills, SkillSet } from "../helper"

const Skills: FC = () => {
    return (
        <div>
            {skills.map((item: SkillSet) => {
                return (
                    <div className="line">
                        <p className="keyword onhover-white">{item.category}</p>
                        <p className="info onhover-white">{item.skills.join(', ')}</p>
                    </div>
                );
            })}

        </div>
    );
}

export default Skills;