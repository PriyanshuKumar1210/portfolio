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
            <h4> Hi, I’m Priyanshu Kumar, a Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
              I specialize in building scalable, user-friendly web applications 
              using the MERN stack (MongoDB, Express.js, React.js, Node.js).
           

            </h4>

            <p>I’ve successfully developed and deployed several real-world projects, including a real-time chat app, a food delivery platform, 
              a currency exchange tool, and my own personal portfolio website.
              My expertise spans responsive UI design, RESTful API development, 
              JWT-based authentication, and working with databases like MongoDB and SQL.</p>

            <p>
              I hold a Master’s degree in Computer Applications (MCA) from SRM University, 
              and I’m passionate about solving real-world problems through clean code, thoughtful design, 
              and continuous learning. With a strong grasp of Data Structures & Algorithms and practical 
              experience across the development lifecycle,
              I’m eager to contribute to impactful digital solutions in a collaborative team environment.
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
