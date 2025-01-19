import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src="" alt="" />
      </div>
      <div className="about-right">
        <div className="about-para">
          <p>
            I am a passionate and dedicated fresher in web development with a
            strong foundation in front-end and back-end technologies. I have
            hands-on experience with HTML, CSS, JavaScript, and frameworks like
            React and Bootstrap, as well as basic knowledge of databases and
            server-side programming. I am enthusiastic about creating
            user-friendly, responsive websites and continuously learning new
            technologies to improve my skills. With a keen eye for design and a
            problem-solving mindset, I am eager to contribute to dynamic
            projects and collaborate with teams to deliver impactful digital
            solutions.
          </p>
        </div>
        <div className="about-skills">
            <div className="about-skills"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
        </div>
      </div>
    </div>
  );
};

export default About;
