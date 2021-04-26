import React from 'react';
import styles from '@styles/NavBar.module.css';
// Next utils
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className={styles.Nav}>
            <Link href="/">
                <picture className={styles.Logo}>
                    <Image src="/logo.svg" alt="logo" width={50} height={50} />
                </picture>
            </Link>
            <div className={styles.Nav_item}>
                <Link href="/projects">
                    <a>
                        <h1>Proyectos</h1>
                    </a>
                </Link>
            </div>

            <div className={styles.Nav_item}>
                <Link href="https://blog.jbearp.com/">
                    <a target="_blank">
                        <h1>Blog</h1>
                    </a>
                </Link>
            </div>

            <div className={styles.Nav_item}>
                <Link href="https://github.com/Jeanpigi">
                    <a target="_blank">
                        <h1>Github</h1>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;
