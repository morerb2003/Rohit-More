import React, { useEffect } from 'react';
import { projects } from '../assets/portfolioData';

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="section-header reveal">
        <h2 className="section-title">THE ARCHIVE</h2>
      </div>
      <div className="proj-grid">
        {projects.map((project, idx) => (
          <div className="proj-card reveal" key={idx}>
            <span className="proj-icon">{project.icon}</span>
            <h3 className="proj-title">{project.title}</h3>
            <div className="proj-subtitle">{project.subtitle}</div>
            <p className="proj-desc">{project.desc}</p>
            <div className="proj-tech-row">
              {project.tech.map((t, tIdx) => (
                <span className="proj-pill" key={tIdx}>{t}</span>
              ))}
            </div>
            <div className="proj-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
