import React from "react";
import Navbar from "./Navbar";
import styles from '../styles/projects/todo.module.css'

export default function Todo() {
    return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.todocontainer}>
        <h2 className={styles.todoH2}>TaskTide (REACT JS)</h2>

        <h3 className={styles.todoH3}>The Problem:</h3>
        <p className={styles.tododescription1}>Need for Effective Task Management Without Overwhelming Complexity</p>
        <p className={styles.tododescription}>People need a simple and effective way to manage their daily tasks and to-dos without being overwhelmed by overly complex and feature-heavy task management tools.</p>
        <h3 className={styles.todoH3}>The Solution:</h3>
        <p className={styles.tododescription1}>A Streamlined and User-Friendly To-Do List Application</p>
        <p className={styles.tododescription}>The to-do list app offers a straightforward and intuitive interface for managing tasks. Users can easily add, complete, and remove tasks, ensuring a focused and efficient task management experience. The app is designed to be distraction-free, helping users stay organized and productive without unnecessary features cluttering the interface.</p>
        
        <h4 className={styles.todoH4}>Link to the App Here: <a href='https://todolist-react-js-553a06c3ba07.herokuapp.com'>--To-Do List App--</a></h4>
        </div>
    </div>
    )
}