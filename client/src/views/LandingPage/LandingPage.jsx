import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";



export default function LandingPage () {
    return (
        <div className={styles.container}>
            <h1>COUNTRIES</h1>
            <Link to="/home"> 
                <button>START</button>
            </Link>
        </div>
    )
}