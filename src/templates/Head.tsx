import { FC } from 'react'
import Head from 'next/head';

const HeadComponent: FC = () => {
    return (
        <Head>
            <title>Jonathan Rodríguez</title>
            <meta name="description" content="Jonathan Rodríguez's Portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default HeadComponent;
