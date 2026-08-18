import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import ExploreLabs from "../components/sections/ExploreLabs";
import WebLab from "../components/sections/WebLab";
import GameLab from "../components/sections/GameLab";
import Journal from "../components/sections/Journal";

function Home() {
  return (
    <>
      <Hero />

      <About />

      <ExploreLabs />

      <WebLab />

      <GameLab />

      <Journal />
    </>
  );
}

export default Home;