import './Profile.css';
import profileImg from '../../assets/profile5.jpg';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <div className="availability"><span className="availability-dot" /> Open to full-time opportunities</div>
        <p className="hero-eyebrow">HELLO, I'M</p>
        <h1>Priyanshu <span className="gradient-text">Kumar.</span></h1>
        <h2>Full Stack Developer <span className="hero-divider">/</span> React &amp; ASP.NET Core</h2>
        <p className="hero-description">
          I build thoughtful, reliable web applications — from polished React interfaces
          to secure APIs and data-driven backend systems. I enjoy turning complex
          requirements into simple experiences that work well for people.
        </p>
        <div className="hero-tags">
          <span>React.js</span><span>ASP.NET Core</span><span>PostgreSQL</span><span>SQL Server</span>
        </div>
        <div className="hero-actions">
          <Link to="/projects" className="primary-button">Explore my work <span>↗</span></Link>
          <a className="secondary-button" href="/Priyanshu_Kumar_Resume.pdf" target="_blank" rel="noreferrer">View resume ↗</a>
        </div>
        <div className="hero-social">
          <a href="https://github.com/priyanshukumar1210" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/priyanshu-kumar-9285431b8/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:priyanshukumar23933@gmail.com">Email ↗</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-photo-frame"><img src={profileImg} alt="Priyanshu Kumar" /></div>
        <div className="floating-card floating-card-top"><span className="floating-icon">⌘</span><div><strong>Full Stack</strong><small>Development</small></div></div>
        <div className="floating-card floating-card-bottom"><span className="status-bars">▂ ▅ ▇</span><div><strong>Always learning</strong><small>Build · Improve · Repeat</small></div></div>
      </div>
    </section>
  );
}
