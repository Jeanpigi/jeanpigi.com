import React from 'react';
// styles
import styles from '@styles/Education.module.css';
// Profile
import { education } from '../profile';

const Education = () => {
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
