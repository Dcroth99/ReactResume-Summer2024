import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/projects/projectImage.module.css'; // Import the CSS module

export default function ProjectImage({ src, alt, title, link }) {
  return (
    <div className={styles.projectImageContainer}>
      <Link to={link}>
        <div className={styles.browserFrame}>
          <div className={styles.browserDots}>
            <span className={styles.dot} style={{ backgroundColor: '#FF5F56' }}></span>
            <span className={styles.dot} style={{ backgroundColor: '#FFBD2E' }}></span>
            <span className={styles.dot} style={{ backgroundColor: '#27C93F' }}></span>
          </div>
          <img src={src} alt={alt} className={styles.projectImage} />
        </div>
        <p className={styles.projectTitle}>{title}</p>
      </Link>
    </div>
  );
}