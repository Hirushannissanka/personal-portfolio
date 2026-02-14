'use client';
import React, { useMemo } from 'react';
import FloatingIcon from './FloatingIcon';
import {
  FaLinux, FaGithub, FaJava, FaGitAlt, FaDocker,
  FaPython, FaNodeJs, FaPhp, FaHtml5,
  FaCss3Alt, FaJsSquare, FaReact
} from 'react-icons/fa';

const iconComponents = [
  FaGithub,
  FaLinux,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact
];

const BackgroundIcons = () => {

  // useMemo prevents re-randomizing on every render
 const icons = useMemo(() => {
  const cols = 4;   // number of columns
  const rows = 3;   // number of rows
  const cellWidth = 100 / cols;
  const cellHeight = 100 / rows;

  let index = 0;
  const spreadIcons = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (index >= iconComponents.length) break;

      const IconComponent = iconComponents[index];

      // random position inside the cell
      const randomTop =
        row * cellHeight + Math.random() * cellHeight;

      const randomLeft =
        col * cellWidth + Math.random() * cellWidth;

      spreadIcons.push({
        IconComponent,
        size: Math.floor(Math.random() * 15) + 20,
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
        delay: Math.random() * 5,
      });

      index++;
    }
  }

  return spreadIcons;
}, []);


  return (
    <>
      {icons.map((icon, i) => (
        <FloatingIcon
          key={i}
          IconComponent={icon.IconComponent}
          size={icon.size}
          top={icon.top}
          left={icon.left}
          delay={icon.delay}
        />
      ))}
    </>
  );
};

export default BackgroundIcons;
