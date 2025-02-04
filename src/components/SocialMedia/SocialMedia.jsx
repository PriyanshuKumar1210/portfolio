import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import './SocialMedia.css';

const SocialMediaLinks = () => {
  return (
    <div className="social-icons">
      <div className="social-icons-item">
        <a
          href="https://github.com/priyanshuKumar1210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" /> GitHub
        </a>
      </div>

      <div className="social-icons-item">
        <a
          href="https://www.linkedin.com/in/priyanshu-kumar-9285431b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" /> LinkedIn
        </a>
      </div>

      <div className="social-icons-item">
        <a
          href="https://www.instagram.com/mr_priyanshukumar?igsh=OTNwdHJlb251Y3Rn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" /> Instagram
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
