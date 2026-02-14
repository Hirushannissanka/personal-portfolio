'use client';
import React from 'react';




const FloatingIcon = ({ IconComponent, size = 30, top = '0%', left = '0%', delay = 0, opacity = 1 }) => {
  return (
    <IconComponent
      style={{
        position: 'absolute',
        top: top,
        left: left,
        width: size,
        height: size,
        opacity: opacity,
        pointerEvents: 'none',
        animation: `breath 4s ease-in-out infinite`
      }}
    />
  );
};

export default FloatingIcon;
