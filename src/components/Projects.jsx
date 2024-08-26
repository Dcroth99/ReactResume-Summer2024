import React from 'react';
import styles from '../styles/projects/projects.module.css'; // Import the CSS module
import Navbar from './Navbar';
import ProjectImage from './ProjectImage'; // Import the ProjectImage component

export default function Projects() {
  const projects = [
    { title: 'Waves Social Media', src: '../images/full-stack-developer-project-waves-socialmedia.jpg', alt: 'Full-Stack Development Project', link: '/projects/waves' },
    { title: 'TaskTide', src: '../images/full-stack-developer-project-todo-website.jpg', alt: 'Full-Stack Development Project', link: '/projects/todo' },
    { title: 'Web Developer Portfolio', src: '../images/full-stack-developer-project-portfolio.png', alt: 'Full-Stack Development Project', link: '/projects/portfolio' }
  ];

  return (
    <div className={styles.container}>
    <Navbar />
      <div className={styles.projectscontainer}>
        <h2 className={styles.projectstitle}>Web-Development Projects</h2>
        <ul className={styles.projectslist}>
            {projects.map((project, index) => (
          <ProjectImage key={index} src={project.src} alt={project.alt} title={project.title} link={project.link} />
            ))}
        </ul>
      </div>
    </div>
  );
}