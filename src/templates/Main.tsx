import { FC } from "react";
import Banner from "../components/sections/Banner";
import About from "../components/sections/About";
import Technologies from "../components/sections/Technologies";
import Courses from "../components/sections/Courses";
import Contact from "../components/sections/Contact";
import Projects from "../components/sections/Projects";

const Main: FC = () => {
  return (
    <main>
      <Banner />
      <About />
      <Projects />
      <Technologies />
      <Courses />
    </main>
  );
};

export default Main;
