import React from 'react';
import Profileimg from './Profileimg';
import Landingtext from './Landingtext';
import Contactme from './Contactme';
import Navbar from './Navbar';
import styles from '../styles/homebase/home.module.css';

export default function Home() {
  
  return (
    <div className={styles.homeBody}>
      <div className={styles.homeContainer}>
        <Navbar />
        <Landingtext />
        <Profileimg />
        <Contactme />
      </div>
    </div>
  );
}

