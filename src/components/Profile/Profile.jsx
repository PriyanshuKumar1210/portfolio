// i used profile instead of hero
/****** This is a profile section which is used to designed a developer profile ** */

import "./Profile.css";
import profile_img from "../../assets/profile2.jpeg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img id="profile_image" src={profile_img} alt="Profile image" />
      </div>

      <div className="profile-info">
        
        <h1>Hey I'm <span>Priyanshu Kumar</span></h1>
        <p>I am a Full Stack Developer from Bihar.</p>
        
        <div className="profile-action">
          <div className="profile-connect">Connect with me</div>
          <div className="profile-resume">My Resume</div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
