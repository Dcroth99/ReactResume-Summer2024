import React from 'react';
import styles from '../styles/certificates/certs.module.css'; // Import the CSS module
import Navbar from './Navbar';
import CertImage from './CertImage';

export default function Certs() {
  const certs = [
    { title: 'Django Meta Certification', src: '../images/full-stack-developer-certificate-django-web-framework.jpg', alt: 'Full-Stack Developer Certificate' },
    { title: 'Databases Certification', src: '../images/full-stack-developer-certificate-database-certificate.jpg', alt: 'Full-Stack Developer Certificate' },
    { title: 'Back-end Development Certification', src: '../images/full-stack-developer-certificate-back-end-development.jpg', alt: 'Full-Stack Developer Certificate' },
    { title: 'Python Programming Certification', src: '../images/full-stack-developer-certificate-python-programming.jpg', alt: 'Full-Stack Developer Certificate' }
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.certscontainer}>
        <h2 className={styles.certstitle}>Web-Developer Certifications</h2>
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