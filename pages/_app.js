import React from 'react';
// components
import Layout from '@components/Layout.js';
import '../public/styles.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
};

export default MyApp;
