import "./Contact.css";
import { useTranslation } from "react-i18next";

function Contact() {

  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">

      <div className="contact-header">

        <span className="contact-tag">
          {t("contact.tag")}
        </span>

        <h2>
          {t("contact.title")}
        </h2>

        <p>
          {t("contact.description")}
        </p>

      </div>


      <div className="contact-terminal">

        <div className="contact-terminal-header">

          <span>
            MORETECK CONNECTION
          </span>

          <span>
            ● ● ●
          </span>

        </div>


        <div className="contact-terminal-body">

          <p className="terminal-status">

            <span>&gt;</span>

            {t("contact.status")}

            <strong>
              {t("contact.online")}
            </strong>

          </p>


          <div className="contact-links">

            <a
              href="mailto:TU_EMAIL_AQUI"
              className="contact-link"
            >

              <span className="contact-label">
                {t("contact.email")}
              </span>

              <span className="contact-value">
                {t("contact.sendMessage")} ↗
              </span>

            </a>


            <a
              href="https://github.com/sebastianamor"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >

              <span className="contact-label">
                GITHUB
              </span>

              <span className="contact-value">
                sebastianamor ↗
              </span>

            </a>

          </div>


          <p className="terminal-waiting">

            {t("contact.waiting")}

            <span className="terminal-cursor">
              █
            </span>

          </p>

        </div>

      </div>

    </section>
  );
}

export default Contact;