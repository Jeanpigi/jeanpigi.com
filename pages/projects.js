import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
// Styles
import styles from '@styles/Projects.module.css';
// Store
import { proyectos } from '@database/profile';

const projects = () => {
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
                        <h2> {title} </h2>
                        <span> {description} </span>
                        <picture>
                            <img src={image} width={250} height={150} alt={title} />
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
