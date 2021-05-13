import React, { useState, useEffect } from 'react';
// styles
import styles from '@styles/Education.module.css';

const Education = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        window.fetch('/api/education').then((response) => response.json()).then(({ data }) => {
            setEducation(data);
        })
    }, [])

    return (
        <div className={styles.Education}>
            <h1>Educación:</h1>
            <ul>
                {education.map(({ title, place, from, to }, index) => (
                    <li key={index}>
                        <h2>{title}</h2>
                        <h3>{place}</h3>
                        <h4>{from} {to ? `- ${to}` : '- current'}</h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Education;
