import React, { useEffect } from 'react';
import { experience } from '../assets/portfolioData';

const Experience = () => {
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
    <section id="experience">
      <div className="section-header reveal">
        
        <h2 className="section-title">THE SERVICE LOG</h2>
      </div>
      <div className="exp-grid">
        {experience.map((item, idx) => (
          <div className="exp-item reveal" key={idx}>
            <div className="exp-date">{item.date}</div>
            <div className="exp-role">
              <h3>{item.role}</h3>
              <p>{item.desc}</p>
              <div className="exp-tech">
                {item.tech.map((t, tIdx) => (
                  <span className="tech-pill" key={tIdx}>{t}</span>
                ))}
              </div>
            </div>
            <div className="exp-company">{item.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
