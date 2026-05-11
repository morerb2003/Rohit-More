import React from 'react';

const Marquee = () => {
  const skills = [
    'JAVA', 'SPRING BOOT', 'REACT.JS', 'POSTGRESQL', 'DOCKER', 
    'AWS S3', 'REDIS', 'JWT AUTH', 'RESTful APIs', 'HIBERNATE'
  ];

  return (
    <div className="marquee">
      <div className="marquee-content">
        {skills.concat(skills).map((skill, idx) => (
          <span className="marquee-item" key={idx}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
