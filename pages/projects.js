import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
// Styles
import styles from '@styles/Projects.module.css';

const projects = () => {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        window.fetch('/api/projects').then((response) => response.json()).then(({ data }) => {
            setProyectos(data);
        })
    }, []);

    // const myLoader = () => {
    //     return proyectos.image;
    // }

    return (
        <>
            <Head>
                <title>Proyectos</title>
            </Head>
            <div className={styles.Projects}>
                <ul className={styles.Projects_card_content}>
                    {proyectos.map(({ title, description, image, url }, index) => (
                        <li key={index} className={styles.Projects_card}>
                            <h2 className={styles.Projects_card_title}> {title} </h2>
                            <span className={styles.Projects_card_body}> {description} </span>
                            <picture className={styles.Projects_image}>
                                <img src={image} alt={title} width={250} height={150} />
                            </picture>
                            <div className={styles.Projects_link}>
                                <Link href={url}>
                                    <a className={styles.Projects_link_button} target="_blank" rel="noopener">
                                        Visita el sitio
                                    </a>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default projects;
