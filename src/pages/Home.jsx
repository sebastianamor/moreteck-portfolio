import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import ExploreLabs from "../components/sections/ExploreLabs";
import WebLab from "../components/sections/WebLab";
import GameLab from "../components/sections/GameLab";
import Journal from "../components/sections/Journal";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <>
      <Hero />

      <About />

      <ExploreLabs />

      <WebLab />

      <GameLab />

      <Journal />

      <Contact />
    </>
  );
}

export default Home;