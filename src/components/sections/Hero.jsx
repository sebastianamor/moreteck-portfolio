import Button from "../common/Button";
import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero() {

  const { t } = useTranslation();

  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <span className="hero-logo">
          &lt; M T /&gt; ;)
        </span>

        <h1>
          MORETECK
        </h1>

        <h2>
          Moreira Technologies
        </h2>

        <p>
          {t("hero.role")}
        </p>

        <div className="buttons">

          <Button>
            {t("hero.explore")}
          </Button>

          <Button secondary>
            {t("hero.github")}
          </Button>

        </div>

      </div>

    </section>
  );
}

export default Hero;