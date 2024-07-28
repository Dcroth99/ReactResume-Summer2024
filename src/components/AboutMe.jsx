import React from 'react';
import styles from '../styles/aboutme/about.module.css'; // Import the CSS module
import Navbar from './Navbar';

export default function AboutMe() {
  
  return (
    <>
    
    <div className={styles.aboutmecontainer}>
    <Navbar />
        <div className={styles.aboutContainer}>
        
          <h2 className={styles.aboutTitle}>About Me</h2>
          <p className={styles.aboutDescription}>
            Hi, I'm Daniel Roth! I began programming in 2022, initially drawn in by the excitement of 
            creating fun games to share with friends using Python and the Pygame library. The instant 
            gratification of solving problems with code captivated me, fueling my desire to delve 
            deeper into programming.
          </p>

          <p className={styles.aboutDescription}>
            During my sophomore year of college, I enrolled in a computer science course that significantly 
            enhanced my skills. Realizing that Python games were just the beginning, I expanded into web 
            development to reach a broader audience with my projects.
          </p>

          <p className={styles.aboutDescription}>
            Discovering Flask and Django enabled me to build robust applications for various innovative ideas. 
            The thrill of managing every aspect of an app, from APIs to databases, was exhilarating. To further 
            enhance user experience, I learned JavaScript and React, finding React's speed and DOM control 
            particularly exciting.
          </p>

          <p className={styles.aboutDescription}>
            This journey naturally led me to Full Stack Development, which perfectly aligns with my interests. 
            Now, I'm dedicated to creating impactful projects and building a career in this field!
          </p>
          <p className={styles.aboutDescription}>
            ⚡ Fun fact: I surf 🌊,  play guitar 🎸,  and I will challenge anyone to a game of chess ♖
          </p>
        </div>
    </div>
    </>
  );
};
