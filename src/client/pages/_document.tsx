import * as React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';

interface Props {
    readonly styleTags: any;
}

class MainDocument extends Document<Props> {

    render() {
        return (
            <html>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="author" content="Ales Dostal"/>
                <title>DEMO - translate</title>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}

export default MainDocument;
