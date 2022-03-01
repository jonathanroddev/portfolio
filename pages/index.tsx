import type { NextPage } from 'next';
import HeadComponent from '../src/templates/Head';
import Main from '../src/templates/Main';
import Footer from '../src/templates/Footer';

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent />
      <Main />
      <Footer />
    </>
  )
}

export default Home;
