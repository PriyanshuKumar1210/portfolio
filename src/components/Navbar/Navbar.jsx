import "./Navbar.css";
import {  Link } from "react-router-dom";
const Navbar = () => {


  return (
    <div className="navbar">
      {/* <img src="" alt="" /> */}
      <h4>PortFolio</h4>
      <ul className="nav-menu">
        <li className="nav-item"><Link to='/'>Home</Link></li>
        <li className="nav-item"><Link to='/about'>About Me</Link></li>
        <li className="nav-item"><Link to='/projects'>Projects</Link></li>
        <li className="nav-item"><Link to='/contact'>Contact Me</Link></li>

       
      </ul>
      
      {/* <div className="nav-connect">Connect With Me</div> */}
    </div>
  );
};

export default Navbar;
