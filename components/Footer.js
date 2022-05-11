import React from 'react';
import styles from '@styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer_content}>
                <h1>Hecho con 💜 por 🐻 JbearP 🇨🇴</h1>
            </div>

            <div className={styles.Footer_social}>
                <div>
                    <Link href="https://gitlab.com/JeanPiBot">
                        <a target="_blank" rel="noopener">
                            <i aria-hidden className="fab fa-gitlab" />
                        </a>
                    </Link>
                </div>

                <div>
                    <Link href="https://github.com/Jeanpigi">
                        <a target="_blank" rel="noopener">
                            <i aria-hidden className="fab fa-github" />
                        </a>
                    </Link>
                </div>

                <div>
                    <Link href="https://www.instagram.com/jean_pierre_gio/">
                        <a target="_blank" rel="noopener">
                            <i aria-hidden className="fab fa-instagram" />
                        </a>
                    </Link>
                </div>

                <div>
                    <Link href="https://www.facebook.com/Jpgaobot/">
                        <a target="_blank" rel="noopener">
                            <i aria-hidden className="fab fa-facebook" />
                        </a>
                    </Link>
                </div>

                <div>
                    <Link href="https://www.youtube.com/channel/UCXNcM9LiqXfXgKU8HIwg9Xg">
                        <a target="_blank" rel="noopener">
                            <i aria-hidden className="fab fa-youtube" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
