import './About.css';
import AboutImage from '../../assets/profile3.jpg';
import Skill from '../Skills/Skill.jsx';
import Certification from '../Certification/Certification.jsx';

const experience = [
  { role: 'Full Stack Developer', company: 'Professional Experience', period: 'Current', detail: 'Developing modern web applications with React, ASP.NET Core and relational databases. Focused on maintainable UI, API integration and reliable data workflows.' },
];

export default function About() {
  return (
    <div className="about-page section-shell">
      <div className="section-intro"><p className="section-kicker">A LITTLE ABOUT ME</p><h1 className="section-heading">Building with purpose. <span className="gradient-text">Growing with curiosity.</span></h1><p className="section-copy">I'm Priyanshu Kumar, a Full Stack Developer who enjoys working across the frontend and backend to create practical, dependable software.</p></div>
      <div className="about-layout">
        <div className="about-photo"><img src={AboutImage} alt="Priyanshu Kumar" /></div>
        <div className="about-content">
          <h2>Turning ideas into useful products.</h2>
          <p>My day-to-day work involves building responsive interfaces with React and developing backend functionality with ASP.NET Core. I also work with PostgreSQL and SQL Server, designing data flows and integrating APIs to support real application workflows.</p>
          <p>I value clean code, thoughtful component design, secure application practices and performance. I am continuously strengthening my knowledge of system design, software architecture and AI-assisted development.</p>
          <div className="about-facts"><div><strong>MCA</strong><span>SRM University</span></div><div><strong>Full Stack</strong><span>Frontend + Backend</span></div><div><strong>Always</strong><span>Learning & building</span></div></div>
        </div>
      </div>
      <section className="experience-section">
        <p className="section-kicker">MY JOURNEY</p><h2 className="section-heading">Experience & <span className="gradient-text">growth</span></h2>
        <div className="timeline">{experience.map(item=><article className="timeline-item" key={item.role}><span className="timeline-dot"/><div className="timeline-card"><div className="timeline-meta"><span>{item.company}</span><span>{item.period}</span></div><h3>{item.role}</h3><p>{item.detail}</p></div></article>)}</div>
      </section>
      <Skill />
      <Certification />
    </div>
  );
}
