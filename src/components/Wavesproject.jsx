import React from "react";
import Navbar from "./Navbar";
import styles from '../styles/projects/waves.module.css';

export default function Wavesproject() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wavescontainer}>
        <h2 className={styles.wavesH2}>Waves Social Media</h2>
        
        <h3><span className={styles.waveshighight}>The Problem:</span> Need for Sharing Content Without Unwanted Distractions on Social Media</h3>
        <p className={styles.wavesdescription}>People need a way to share information, pictures, and links with a wide audience without getting caught up in the overwhelming content and intrusive algorithms of current social media platforms.</p>

        <h3><span className={styles.waveshighight}>The Solution:</span> A Streamlined and Personalized Social Media Platform</h3>
        <p className={styles.wavesdescription}>The social media app offers a streamlined experience by curating a personalized content feed that only shows posts from the user's chosen network and interests. Users can share information, pictures, and links without the distraction of irrelevant content, ensuring a more meaningful and engaging experience</p>

        <h4 className={styles.wavesH4}>Link to the website here: <a href="http://www.wavesinteract.com/login/">--Waves App--</a></h4>

        <h2 className={styles.wavesH3}>Welcome to Waves!</h2>
        
        <p className={styles.wavesdescription}>Waves is a social media platform designed to facilitate seamless interaction among users. 
          This platform allows users to create posts, follow each other, and engage with content through likes and comments. The application aims to deliver a user-friendly 
          experience with responsive design elements to ensure accessibility across various devices, including desktops, tablets, and smartphones.</p>

        <h2 className={styles.wavesH2}>Key Features</h2>
        <ul>
          <li><h4>User Profiles:</h4>Each user has a dedicated profile page displaying their profile picture, bio, posts, followers, and following lists.</li>
          <li><h4>Posts and Comments:</h4>Users can create text-based posts and upload images. They can also comment on posts and engage in discussions.</li>
          <li><h4>Follow System:</h4> Users can follow and unfollow each other, and view lists of their followers and the people they follow.</li>
          <li><h4>Likes: </h4>Users can like or unlike posts, with a like counter displayed on each post.</li>
          <li><h4>Notifications:</h4>Real-time notifications for new followers, likes, and comments ensure that users stay updated.</li>
          <li><h4>Responsive Design:</h4>The application is designed to be fully responsive, providing a seamless experience across different screen sizes and devices.</li>
        </ul>



        <h2 className={styles.wavesH2}>Developer Skills Highlighted</h2>

        <h3 className={styles.wavesH3}>Frontend Development: 
        </h3>

        <ul>
            <li><h4>HTML/CSS:</h4> Structured and styled the application using HTML and CSS, ensuring a clean and user-friendly interface.</li>
            <li><h4>Bootstrap:</h4>  Utilized Bootstrap for responsive design, ensuring the application is accessible on various devices.</li>
            <li><h4>JavaScript:</h4> Implemented interactive elements such as the notification toggle and comment reveal functionality.</li>
        </ul>

    <h3 className={styles.wavesH3}>Backend Development:
    </h3>

    <ul>
        <li><h4>Django:</h4>Leveraged the Django framework to build a robust backend, managing user authentication, database interactions, and API endpoints.</li>
        <li><h4>Database Management:</h4>Configured and managed PostgreSQL database, ensuring efficient data storage and retrieval.</li>
    </ul>

    <h3 className={styles.wavesH3}>DevOps and Deployment:
    </h3>
    <ul>
        <li><h4>Heroku:</h4>Deployed the application on Heroku, ensuring scalability and reliability.</li>
        <li><h4>AWS S3:</h4>Integrated AWS S3 for secure and scalable storage of user-uploaded images and static files.</li>
        <li><h4>Environment Management:</h4>Utilized environment variables to manage secret keys and configuration settings securely.</li>
    </ul>
    <h3 className={styles.wavesH3}>Security and Performance:</h3>
    <ul>
        <li><h4>User Authentication:</h4>Implemented Django's built-in authentication system to ensure secure user login and registration.</li>
        <li><h4>Error Logging:</h4>Configured error logging to monitor and handle application errors efficiently.</li>
        <li><h4>Optimization:</h4>Applied caching mechanisms to enhance the application's performance and user experience.</li>
    </ul>
    <h3 className={styles.wavesH3}>Version Control:
    </h3>
    <ul>
        <li><h4>Git:</h4>Used Git for version control, managing the codebase efficiently and collaborating on updates and fixes.</li>
    </ul>
      </div>
    </div>
  );
}