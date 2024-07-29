import React from 'react';
import styles from '../styles/landingtext/landingtext.module.css';

export default function Landingtext() {
  return (
    <div className={styles.aboutLanding}>
      <h1 className={styles.h1Landing}>Hi, my name is</h1>
      <h1 className={styles.name}>Daniel Roth</h1>
      <p>
        I am a <span className={styles.highlight}>Full-Stack Web Developer</span> with experience across multiple programming languages and technologies. I am passionate about creating user-friendly applications that solve real-world problems.
      </p>
      <p className={styles.secondp}>
      I specialize in building robust, scalable web applications using Python, Django, JavaScript, React, and Node.js. My experience includes creating dynamic user interfaces with React and developing powerful APIs and server-side logic with Django.
     </p>
    </div>
  );
}