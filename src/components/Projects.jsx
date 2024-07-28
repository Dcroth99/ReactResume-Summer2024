import React from 'react';
import styles from '../styles/projects/projects.module.css'; // Import the CSS module
import Navbar from './Navbar';
import ProjectImage from './ProjectImage'; // Import the ProjectImage component

export default function Projects() {
  const projects = [
    { title: 'Waves Social Media', src: '../images/wavessocialprofiles.jpg', alt: 'Waves Social Media', link: '/projects/waves' },
    { title: 'TaskTide', src: '../images/TODOREACTPIC.jpg', alt: 'TaskTide', link: '/projects/todo' },
    { title: 'Portfolio', src: '../images/PORTFOLIOJULY.png', alt: 'Portfolio', link: '/projects/portfolio' }
  ];

  return (
    <div className={styles.container}>
    <Navbar />
      <div className={styles.projectscontainer}>
        <h2 className={styles.projectstitle}>Projects</h2>
        <ul className={styles.projectslist}>
            {projects.map((project, index) => (
          <ProjectImage key={index} src={project.src} alt={project.alt} title={project.title} link={project.link} />
            ))}
        </ul>
      </div>
    </div>
  );
}