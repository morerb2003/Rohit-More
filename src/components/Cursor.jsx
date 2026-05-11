import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const curRef = useRef(null);
  const ringRef = useRef(null);
  
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (curRef.current) {
        curRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }
    };

    const animRing = () => {
      rx += (mx - rx - 16) * 0.12;
      ry += (my - ry - 16) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      requestAnimationFrame(animRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationFrame = requestAnimationFrame(animRing);

    // Hover effects
    const handleMouseEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '50px';
        ringRef.current.style.height = '50px';
        ringRef.current.style.opacity = '0.8';
      }
    };

    const handleMouseLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '32px';
        ringRef.current.style.height = '32px';
        ringRef.current.style.opacity = '0.5';
      }
    };

    const interactives = document.querySelectorAll('a, button, .proj-card, .exp-item, .skill-card, .social-link');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef}></div>
      <div id="cur-ring" ref={ringRef}></div>
    </>
  );
};

export default Cursor;
