import Button from "../common/Button";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <span className="hero-logo">
          &lt; M T /&gt; ;)
        </span>

        <h1>MORETECK</h1>

        <h2>Moreira Technologies</h2>

        <p>
          Developer • Web Creator • Game Enthusiast
        </p>

        <div className="buttons">

          <Button>
            Enter Developer Lab 🚀
          </Button>

          <Button secondary>
            GitHub
          </Button>

        </div>

      </div>

    </section>
  );
}

export default Hero;