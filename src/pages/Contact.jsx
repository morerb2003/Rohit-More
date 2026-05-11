import React, { useEffect, useState } from 'react';
import { contactInfo } from '../assets/portfolioData';

const Contact = () => {
  const [btnText, setBtnText] = useState('TRANSMIT DATA');
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleSend = (e) => {
    e.preventDefault();
    setBtnText('TRANSMITTING...');
    setTimeout(() => {
      setBtnText('✓ DATA RECEIVED');
      setIsSuccess(true);
      setTimeout(() => {
        setBtnText('TRANSMIT DATA');
        setIsSuccess(false);
        e.target.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="section-header reveal">
        <h2 className="section-title">INITIALIZE COMMS</h2>
      </div>
      <div className="contact-grid reveal">
        <div className="contact-form">
          <form id="secure-form" onSubmit={handleSend}>
            <div className="form-row">
              <div className="form-group">
                <label>Source Identifier</label>
                <input type="text" placeholder="YOUR NAME" required />
              </div>
              <div className="form-group">
                <label>Comms Frequency</label>
                <input type="email" placeholder="EMAIL@DOMAIN.COM" required />
              </div>
            </div>
            <div className="form-group full">
              <label>Data Payload</label>
              <textarea placeholder="INITIALIZE MESSAGE SEQUENCE..." required></textarea>
            </div>
            <button 
              type="submit" 
              className="btn-send"
              style={isSuccess ? { background: '#27c93f' } : {}}
            >
              {btnText}
            </button>
          </form>
        </div>
        <div className="contact-links">
          <div className="social-row">
            {contactInfo.socials.map((social, idx) => (
              <a 
                key={idx}
                href={social.url} 
                className="social-link" 
                title={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', opacity: 0.4 }}>
            {contactInfo.location}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
