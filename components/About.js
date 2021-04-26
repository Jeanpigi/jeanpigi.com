import React from 'react';
// Styles
import styles from '@styles/About.module.css';

const About = () => {
    return (
        <div className={styles.About}>
            <h2>¿Quién soy? </h2>
            <p>Soy Especialista TIC para la Innovación Educativa, Ingeniero de sistemas y Frontend Developer Caqueteño con experiencia en el sector educativo. Busco colaborar en una posición en la creación de sitios web debido a mis logros y trabajos implementados, además de los certificados obtenidos de la plataforma Platzi.</p>
            <h2>Trayectoria:</h2>
            <ul>
                <li>Desarrollador frontend</li>
                <li>Analista de Proyectos Educativos</li>
                <li>Sistematizador de Proyectos</li>
                <li>Auxiliar IT</li>
            </ul>
            <span>🌱 Actualmente estoy aprendiendo sobre Deno, TypeScript, Python y Go.</span>
            <span>📫 Cómo contactarme: Actualmente, busco nuevas oportunidades que puedan ayudarme a mejorar como persona y profesional. Ya sea que necesites contactarme a través de mi red social.</span>
        </div>
    )
}

export default About;
