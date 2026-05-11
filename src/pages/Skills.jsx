import React, { useEffect } from 'react';
import { skillMatrix } from '../assets/portfolioData';

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.querySelectorAll('.skill-fill').forEach(fill => {
            fill.style.width = fill.getAttribute('data-percent');
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="section-header reveal">
        <h2 className="section-title">THE MATRIX</h2>
      </div>
      <div className="skills-matrix reveal">
        {skillMatrix.map((category, idx) => (
          <div className="skill-card" key={idx}>
            <span className="skill-icon">{category.icon}</span>
            <h3 className="skill-cat">{category.category}</h3>
            {category.skills.map((skill, sIdx) => (
              <div className="skill-item" key={sIdx}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.percent}</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    data-percent={skill.percent}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
