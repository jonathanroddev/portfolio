import { FC } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Technologies from '../components/sections/Technologies';
import Contact from '../components/sections/Contact';

const Main: FC = () => {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Experience />
            <Projects />
            <Technologies />
            <Contact />
        </main>
    );
};

export default Main;
