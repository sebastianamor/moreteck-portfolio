import Button from "../common/Button";
import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero() {

  const { t } = useTranslation();

  const goToLabs = () => {
    document.getElementById("labs")?.scrollIntoView({
      behavior: "smooth",
    });
  };

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

          <Button onClick={goToLabs}>
            {t("hero.explore")}
          </Button>

          <Button
            secondary
            onClick={() =>
              window.open(
                "https://github.com/sebastianamor",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            {t("hero.github")}
          </Button>

        </div>

      </div>

    </section>
  );
}

export default Hero;