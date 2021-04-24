import React from 'react';
import Document, {
 Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <script
                        defer
                        src="https://kit.fontawesome.com/2268c379d5.js"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
