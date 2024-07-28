import React from 'react';
import styles from '../styles/profileimg/profile.module.css';

export default function Profileimg() {
  return (
    <div className={styles.profileFrame}>
      <div className={styles.mainImgHolder}>
        <img src="./images/DanielSuit.png" className={styles.mainImage} alt="Daniel Roth" />
      </div>
    </div>
  );
}