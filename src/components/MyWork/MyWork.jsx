import "./MyWork.css";
import theme_pattern from '../../assets/theme_pattern.svg';
import work from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useState } from 'react';

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const displayedWork = showAll ? work : work.slice(0, 4);



  const handleSourceCode = (sourceUrl) => {
    if (sourceUrl) {
      window.open(sourceUrl, '_blank');
    } else {
      alert('Source code not available for this project');
    }
  };

  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/*---------- Enhanced project showcase with interactive cards --------- */}
      
      <div className="mywork-container">
        {displayedWork.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-image-wrapper">
              <img src={project.w_img} alt={project.w_name} />
              <div className={`project-overlay ${hoveredProject === index ? 'active' : ''}`}>
                <div className="project-info">
                  <h3>{project.w_name}</h3>
                  <p>{project.w_description}</p>
                  <div className="project-buttons">
                
                    <button 
                      className="btn-code"
                      onClick={() => handleSourceCode(project.source_url)}
                    >
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      

      {/*------- Enhanced section ends --------*/}
    </div>
  )
}

export default MyWork
