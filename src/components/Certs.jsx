import React from 'react';
import styles from '../styles/certificates/certs.module.css'; // Import the CSS module
import Navbar from './Navbar';
import CertImage from './CertImage';

export default function Certs() {
  const certs = [
    { title: 'Django Meta Certification', src: '../images/djangometacert.jpg', alt: 'Waves Social Media' },
    { title: 'Databases Certification', src: '../images/DatabasesCertificate.jpg', alt: 'Tile Game' },
    { title: 'Back-end Development Certification', src: '../images/metacert1.jpg', alt: 'TaskTide' },
    { title: 'Python Programming Certification', src: '../images/pythonmetacert.jpg', alt: 'Portfolio' }
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.certscontainer}>
        <h2 className={styles.certstitle}>Certifications</h2>
        <ul className={styles.certslist}>
          {certs.map((cert, index) => (
            <li key={index} className={styles.certsitem}>
              <CertImage src={cert.src} alt={cert.alt} title={cert.title}  />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}