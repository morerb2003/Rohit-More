import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div id="pre" style={{ opacity: isVisible ? 1 : 0, visibility: isVisible ? 'visible' : 'hidden' }}>
      <div className="pre-name">
        {'ROHIT MORE'.split('').map((char, idx) => (
          <span key={idx} style={{ animationDelay: `${idx * 0.05}s` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      <div className="pre-bar-container">
        <div className="pre-bar"></div>
      </div>
    </div>
  );
};

export default Preloader;
