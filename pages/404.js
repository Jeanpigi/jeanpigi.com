import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

// pages/404.js
export default function Custom404() {
    return (
        <>
        <Head>
            <title>Error</title>
        </Head>
        <div className="Error">
            <div className="Error-title">
                <h1>404 - No se encuentra esta página</h1>
            </div>
            <div className="Error404-image">
                <figure>
                    <Image
                        src="/error.png"
                        alt="error404"
                        width={300}
                        height={200}
                    />
                </figure>
            </div>
        </div>
        </>
    );
}
