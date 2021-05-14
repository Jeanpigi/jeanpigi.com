import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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

    const myLoader = () => {
        return proyectos.image;
    }

    return (
        <>
        <Head>
            <title>Proyectos</title>
        </Head>
        <div className={styles.Projects}>
            <ul>
                {proyectos.map(({ title, description, image, url }, index) => (
                    <li key={index}>
                        <h2> {title} </h2>
                        <span> {description} </span>
                        <picture>
                            <Image loader={myLoader} src={image} alt={title} width={250} height={150} />
                        </picture>
                        <Link href={url}>
                            <a target="_blank" rel="noopener">
                                enlace al sitio web
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
