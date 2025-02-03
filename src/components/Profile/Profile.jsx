// i used profile instead of hero
/****** This is a profile section which is used to designed a developer profile ** */

import "./Profile.css";
import profile_img from "../../assets/profile5.jpg";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const navigate = useNavigate(); //it uses to navigate a contact page from Profile

  const resumeDownload = ()=>{
      window.open("/mnt/sda4/react-portfolio/public/MyNew_Resume.pdf","_blank");
      console.log("Resume Download");
  }
  return (
    <div className="profile">

{/*  It shows the user profile in home tab*/}

      <div className="profile-image">
        <img id="profile_image" src={profile_img} alt="Profile image" />
      </div>

{/*  It stores brief infromation about the developer/portfolio-user */}

      <div className="profile-info">
        
        <h1>Hey I'm <span>Priyanshu Kumar</span></h1>
        <p>I am a Full Stack Developer from Bihar.</p>
        
        <div className="profile-action">
          <div className="profile-connect"><p onClick={() => navigate("/contact") }>Connect with me</p></div>
          <div className="profile-resume" onClick={resumeDownload}>My Resume</div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
