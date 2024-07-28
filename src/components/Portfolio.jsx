import React from "react";
import styles from '../styles/projects/portfolio.module.css';
import Navbar from "./Navbar";

export default function Portfolio() {
    return (
    <div className={styles.container}>
        <Navbar />
    <div className={styles.portfoliocontainer}>
    
        <h2 className={styles.portfolioH2}>Portfolio Project</h2>
        <h3 className={styles.portfolioH3}>Details</h3>
        <p className={styles.portfoliodescription}>I built this portfolio project from scratch to showcase my web development skills and have full control over the design and functionality. Using a regular portfolio builder or resume builder can be limiting in terms of customization and personal touch. By building my own portfolio, I was able to create a unique presentation that truly reflects my skills, personality, and the quality of work I can deliver.</p>
        <h3 className={styles.portfolioH3}>Why I Built It</h3>
        <h3 className={styles.portfolioH3}>Creating my own portfolio allowed me to:</h3>
        <ul>
            <li className={styles.portfoliolist}>Demonstrate my proficiency in front-end and back-end technologies.</li>
            <li className={styles.portfoliolist}>Implement custom features that aren't typically available in standard portfolio builders.</li>
            <li className={styles.portfoliolist}>Showcase my problem-solving skills and ability to build a project from the ground up.</li>
            <li className={styles.portfoliolist}>Maintain full control over the codebase, allowing for easy updates and improvements.</li>
        </ul>
        <h2 className={styles.portfolioH2}>Technologies Used</h2>
        <h3 className={styles.portfolioH3}>The technologies used to build this portfolio include:</h3>
        <ul>
            <li><h4 className={styles.portfolioH4}>HTML</h4> For structuring the content of the webpage.</li>
            <li><h4 className={styles.portfolioH4}>CSS</h4> For styling the webpage and making it visually appealing.</li>
            <li><h4 className={styles.portfolioH4}>React || JavaScript</h4> For adding interactivity and dynamic content.</li>

        </ul>
    </div>
    </div>
    )
}