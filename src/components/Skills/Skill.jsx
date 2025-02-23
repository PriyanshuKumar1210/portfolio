import "./skill.css";
import skillsData from "../../assets/skills.js";

const Skill = () => {
  return (
    <div className="skills">
      <h1>MY SKILLS</h1>
      <div className="skills-items">
        {skillsData.map((data, id) => {
          return (
            <div key={id} className="skill-element">
              <img src={data.icon} alt="" />
              <p>{data.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
