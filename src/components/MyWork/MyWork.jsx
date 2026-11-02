import './MyWork.css';
import work from '../../assets/mywork_data.js';

const icons = { osm: '▦', callervault: '◉', 'apna-rasoi': '⌂', 'currency-converter': '⇄' };

export default function MyWork() {
  return (
    <section className="projects-page section-shell">
      <div className="section-intro">
        <p className="section-kicker">SELECTED WORK</p>
        <h1 className="section-heading">Projects I've <span className="gradient-text">worked on.</span></h1>
        <p className="section-copy">A selection of professional and personal work that reflects my interest in building useful, scalable web applications.</p>
      </div>
      <div className="projects-grid">
        {work.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className={`project-art project-art-${project.id}`}>
              {project.w_img && <img src={project.w_img} alt="" />}
              <span className="project-art-icon">{icons[project.id]}</span>
              <span className="project-number">0{index + 1}</span>
            </div>
            <div className="project-body">
              <div className="project-category">{project.category}</div>
              <h2>{project.w_name}</h2>
              <p>{project.w_description}</p>
              <div className="project-tech">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
              <div className="project-links">
                {project.source_url ? <a href={project.source_url} target="_blank" rel="noreferrer">View source code ↗</a> : <span>{project.confidential ? 'Professional project · Details kept confidential' : 'Private project · Demo available on request'}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
