import React from 'react'
import { useState, useEffect } from 'react';

export default function MouseComponent() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
          borderRadius: '50%',
        }}
      />
    );
  
}
