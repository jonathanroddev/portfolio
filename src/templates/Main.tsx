import { FC } from 'react';
import Banner from '../components/sections/Banner';
import About from '../components/sections/About';
import Technologies from '../components/sections/Technologies';
import Courses from '../components/sections/Courses';
import Contact from '../components/sections/Contact';

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
