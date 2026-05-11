import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'skills', 'projects', 'edu', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 120) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="nav">
      <a href="#" className="nav-logo">ROHIT<em>.</em>MORE</a>
      
      <button 
        className="hamburger" 
        id="hamburger" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span><span></span><span></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <a 
            href="#experience" 
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Exp.
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Work
          </a>
        </li>
        <li>
          <a 
            href="#edu" 
            className={`nav-link ${activeSection === 'edu' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Edu.
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>

      <a href="#contact" className="nav-hire">HIRE ME →</a>
    </nav>
  );
};

export default Navbar;
