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
        I specialize in using technologies such as Python, Django, React, and Node.js to build robust, scalable web applications. My experience includes front-end development with React, creating dynamic and responsive user interfaces, as well as back-end development with Django, building powerful APIs and server-side logic.
     </p>
    </div>
  );
}