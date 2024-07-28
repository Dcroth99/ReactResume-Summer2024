import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/navbar/navbar.module.css'; // Import the CSS module

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbarH1}>
        <FontAwesomeIcon icon={faCode} />
      </h1>
      <ul className={styles.navbarItems}>
        <li className={styles.navhome}><Link to="/">Home</Link></li>
        <li className={styles.navabout}><Link to="/about">About</Link></li>
        <li className={styles.navprojects}><Link to="/projects">Projects</Link></li>
        <li className={styles.navcertificates}><Link to="/certificates">Certifications</Link></li>
      </ul>
    </nav>
  );
}