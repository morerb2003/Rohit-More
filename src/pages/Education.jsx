import React, { useEffect } from 'react';
import { education, certification } from '../assets/portfolioData';

const Education = () => {
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
    <section id="edu">
      <div className="section-header reveal">
        <h2 className="section-title">THE FOUNDATION</h2>
      </div>
      <div className="edu-grid">
        <div className="edu-card reveal">
          <span className="edu-year">{education.year}</span>
          <h3 className="edu-school">{education.school}</h3>
          <p className="edu-degree">{education.degree}</p>
          <div className="edu-badge">{education.badge}</div>
        </div>
        <div className="cert-card reveal">
          <span className="cert-org">{certification.org}</span>
          <h3 className="cert-name">{certification.name}</h3>
          <div className="cert-badge">
            <span className="badge-star">★</span> {certification.badge}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
