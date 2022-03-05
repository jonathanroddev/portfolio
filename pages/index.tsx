import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Header from '../src/templates/Header';
import Main from '../src/templates/Main';
import Footer from '../src/templates/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jonathan Rodríguez</title>
        <meta name="description" content="Jonathan Rodríguez's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      {/* }<Footer />{*/}
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
