import "./About.css";
import { useTranslation } from "react-i18next";

function About() {

  const { t } = useTranslation();

  return (
    <section id="about" className="about">

      <div className="about-header">

        <span className="about-tag">
          {t("about.tag")}
        </span>

        <h2>
          {t("about.title")}
        </h2>

        <p>
          {t("about.description")}
        </p>

      </div>


      <div className="about-content">

        <div className="about-intro">

          <h3>
            Sebastián Moreira
          </h3>

          <p>
            {t("about.paragraph1")}
          </p>

          <p>
            {t("about.paragraph2")}
          </p>

          <p>
            {t("about.paragraph3")}
          </p>

        </div>


        <div className="about-terminal">

          <div className="terminal-header">

            <span>
              MORETECK SYSTEM
            </span>

            <span>
              ● ● ●
            </span>

          </div>


          <div className="terminal-body">

            <p>
              <span>&gt;</span> {t("about.systemStatus")}
              <strong> {t("about.online")}</strong>
            </p>

            <p>
              <span>&gt;</span> {t("about.webDevelopment")}
              <strong> {t("about.active")}</strong>
            </p>

            <p>
              <span>&gt;</span> {t("about.gameDevelopment")}
              <strong> {t("about.active")}</strong>
            </p>

            <p>
              <span>&gt;</span> {t("about.experimentation")}
              <strong> {t("about.active")}</strong>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;