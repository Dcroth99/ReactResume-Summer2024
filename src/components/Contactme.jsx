import React from 'react';
import styles from '../styles/contactme/contact.module.css';

export default function Contactme() {
  return (
    <div className={styles.contact}>
      <h3>Contact Me</h3>
      <ul className={styles.contactList}>
        <li><i className="fas fa-envelope"></i> <strong>Email: </strong> Danielcharlesroth@gmail.com</li>
        <li><i className="fas fa-phone"></i> <strong>Phone: </strong> (858)-395-3373</li>
      </ul>
      <div className={styles.socialMedia}>
        <a href="https://github.com/Dcroth99" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/daniel-roth-945856239/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}