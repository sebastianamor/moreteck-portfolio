import "./ExploreLabs.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const goToLab = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

const labs = [
  {
    icon: "💻",
    title: "labs.web.title",
    description: "labs.web.description",
    target: "web-lab",
  },
  {
    icon: "🎮",
    title: "labs.game.title",
    description: "labs.game.description",
    target: "game-lab",
  },
  {
    icon: "🧩",
    title: "labs.scratch.title",
    description: "labs.scratch.description",
    target: "scratch-lab",
  },
  {
    icon: "📝",
    title: "labs.journal.title",
    description: "labs.journal.description",
    target: "journal",
  },
];

export default function ExploreLabs() {

  const { t } = useTranslation();

  return (
    <section id="labs" className="explore">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("labs.title")}
      </motion.h2>

      <p className="subtitle">
        {t("labs.subtitle")}
      </p>

      <div className="lab-grid">

        {labs.map((lab, index) => (

          <motion.div
            key={index}
            className="lab-card"
            whileHover={{ y: -10, scale: 1.03 }}
          >

            <div className="icon">
              {lab.icon}
            </div>

            <h3>
              {t(lab.title)}
            </h3>

            <p>
              {t(lab.description)}
            </p>

            <button
              onClick={() => goToLab(lab.target)}
            >
              {t("labs.explore")}
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}