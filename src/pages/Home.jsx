import React, { useState, useEffect } from 'react';
import { profileSummary } from '../assets/portfolioData';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = profileSummary.typewriterWords[wordIndex];
    
    const type = () => {
      if (isDeleting) {
        setCharIndex(prev => prev - 1);
      } else {
        setCharIndex(prev => prev + 1);
      }

      setDisplayText(currentWord.substring(0, charIndex));

      let typeSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % profileSummary.typewriterWords.length);
        typeSpeed = 400;
      }

      return typeSpeed;
    };

    const timer = setTimeout(type, isDeleting && charIndex === currentWord.length ? 2000 : (isDeleting && charIndex === 0 ? 400 : (isDeleting ? 40 : 80)));
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  // Handle intersection observer for reveal effect
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
    <section id="hero">
      <div className="hero-content">
        <div className="hero-badge reveal">
          <span className="badge-dot"></span> Available for deployment
        </div>
        <h1 className="hero-name reveal">
          ROHIT<br /><span>MORE</span>
        </h1>
        <div className="hero-typewriter reveal" id="typewriter">
          {displayText}
        </div>
        <div className="hero-actions reveal">
          <a href="#projects" className="btn-main">VIEW WORK</a>
          <a href="/resume.pdf" download className="nav-hire" style={{ padding: '18px 40px', fontSize: '0.9rem' }}>RESUME ↓</a>
          <a href="mailto:morerb2003@gmail.com" className="nav-hire" style={{ padding: '18px 40px', fontSize: '0.9rem' }}>EMAIL ME</a>
        </div>
      </div>
      
      <div className="hero-profile reveal">
        <div className="profile-card">
          <div className="avatar-ring-container">
            <div className="avatar-ring"></div>
            <div className="avatar-img">
              <img src={profileSummary.profileImage} alt={profileSummary.name} />
            </div>
          </div>
          <div className="profile-info">
            <h3>{profileSummary.name}</h3>
            <p>{profileSummary.title}</p>
          </div>
          <div className="profile-stats">
            {profileSummary.stats.map((stat, index) => (
              <div className="stat-box" key={index}>
                <div className="stat-num">{stat.num}</div>
                <div className="stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
