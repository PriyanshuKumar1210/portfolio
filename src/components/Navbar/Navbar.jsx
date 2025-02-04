import "./Navbar.css";
import {  Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //THis function used to closed the toggle automatically

  const closeMenu = ()=>{
    setIsOpen(false);
  }

  return (
    <div className="navbar">
      {/* <img src="" alt="" /> */}
      <h4>PortFolio</h4>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li className="nav-item"><Link to='/'  onClick={closeMenu}>Home</Link></li>
        <li className="nav-item"><Link to='/about' onClick={closeMenu}>About Me</Link></li>
        <li className="nav-item"><Link to='/projects' onClick={closeMenu}>Projects</Link></li>
        <li className="nav-item"><Link to='/contact' onClick={closeMenu}>Contact Me</Link></li>

       
      </ul>
      
      {/* <div className="nav-connect">Connect With Me</div> */}
    </div>
  );
};

export default Navbar;
