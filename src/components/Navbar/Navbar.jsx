import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar">
      <NavLink to="/" className="brand" onClick={() => setIsOpen(false)}>Priyanshu<span>.</span></NavLink>
      <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={isOpen} onClick={() => setIsOpen(v => !v)}>
        <span /><span /><span />
      </button>
      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        {links.map(link => (
          <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            {link.label}
          </NavLink>
        ))}
        <a className="nav-hire" href="mailto:priyanshukumar23933@gmail.com" onClick={() => setIsOpen(false)}>Let's talk ↗</a>
      </nav>
    </header>
  );
}
