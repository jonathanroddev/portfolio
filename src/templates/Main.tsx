import { FC } from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Technologies from '../components/Technologies';
import Courses from '../components/Courses';
import Contact from '../components/Contact';

const Main: FC = () => {
    return (
        <main>
            <Banner />
            <About />
            <Technologies />
            <Courses />
            <Contact />
        </main>
    )
}

export default Main;
