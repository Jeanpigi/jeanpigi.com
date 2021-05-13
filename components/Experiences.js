import React, { useState, useEffect } from 'react';
// Styles
import styles from '@styles/Experiences.module.css';

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        window.fetch('/api/experiences').then((response) => response.json()).then(({ data }) => {
            setExperiences(data);
        })
    }, [])

    return (
        <div className={styles.Experiences}>
            <h1>Experiencia:</h1>
            <ul>
                {experiences.map(({ title, place, description, from, to }, i) => (
                    <li key={i}>
                        <h2>{title}</h2>
                        <h3>{place}</h3>
                        <p>{description}</p>
                        <h4>{from} {to ? `- ${to}` : '- current'}</h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experiences;
