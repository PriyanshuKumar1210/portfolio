import "./About.css";
import AboutImage from "../../assets/profile3.jpg";
import Skill from "../Skills/Skill.jsx";
import Certification from "../Certification/Certification.jsx";

const About = () => {
  return (
    <div className="about">

      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        
        <div className="about-left">
          <img id="image" src={AboutImage} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate and dedicated fresher in web development with a
              strong foundation in front-end and back-end technologies. I have
              hands-on experience with HTML, CSS, JavaScript, and frameworks
              like React and Bootstrap, as well as basic knowledge of databases
              and server-side programming. I am enthusiastic about creating
              user-friendly, responsive websites and continuously learning new
              technologies to improve my skills. With a keen eye for design and
              a problem-solving mindset, I am eager to contribute to dynamic
              projects and collaborate with teams to deliver impactful digital
              solutions.
            </p>

            <p>
              Currently, I'm pursing MCA from S.R.M University
            </p>
          </div>
        </div>
      </div>

      <hr />

          <Skill />

      <hr />
          <Certification />


    </div>
  );
};

export default About;
