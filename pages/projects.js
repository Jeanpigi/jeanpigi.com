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
                <ul>
                    {proyectos.map(({ title, description, image, url }, index) => (
                        <li key={index}>
                            <Link href={url}>
                                <a className={styles.Projects_link} target="_blank" rel="noopener">
                                    <h2> {title} </h2>
                                    <span> {description} </span>
                                    <picture>
                                        <img src={image} alt={title} width={250} height={150} />
                                    </picture>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default projects;
