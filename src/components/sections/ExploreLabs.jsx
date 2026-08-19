import "./ExploreLabs.css";
import { motion } from "framer-motion";

const goToLab = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

const labs = [
  {
    icon: "💻",
    title: "Web Lab",
    description: "Web applications and experiments.",
    target: "web-lab",
  },
  {
    icon: "🎮",
    title: "Game Lab",
    description: "Games and interactive experiments.",
    target: "game-lab",
  },
  {
    icon: "🧩",
    title: "Scratch Lab",
    description: "Projects created with Scratch.",
    target: "scratch-lab",
  },
  {
    icon: "📝",
    title: "Dev Journal",
    description: "Notes from my developer journey.",
    target: "journal",
  },
];

export default function ExploreLabs() {
  return (
    <section id="labs" className="explore">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore the Laboratory
      </motion.h2>

      <p className="subtitle">Every lab represents a part of my journey.</p>

      <div className="lab-grid">
        {labs.map((lab, index) => (
          <motion.div
            key={index}
            className="lab-card"
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className="icon">{lab.icon}</div>

            <h3>{lab.title}</h3>

            <p>{lab.description}</p>

            <button onClick={() => goToLab(lab.target)}>Explore →</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}