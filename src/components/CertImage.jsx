import React from 'react';
import styles from '../styles/certificates/certImages.module.css'; // Import the CSS module

export default function CertImage({ src, alt, title }) {
  return (
    <div className={styles.certImageContainer}>
      <div className={styles.certFrame}>
        <img src={src} alt={alt} className={styles.certImage} />
      </div>
      <p className={styles.certTitle}>{title}</p>
    </div>
  );
}