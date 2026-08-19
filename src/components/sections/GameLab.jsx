import games from "../../data/games";
import "./GameLab.css";
import { useTranslation } from "react-i18next";

function GameLab() {
  const { t } = useTranslation();
  return (
    <section id="game-lab" className="game-lab">

      <div className="game-lab-header">
<span className="game-terminal">
  {t("gameLab.tag")}
</span>

<h2>
  {t("gameLab.title")}
</h2>

<p>
  {t("gameLab.description")}
</p>

      </div>


      <div className="games-grid">

        {games.map((game) => (

          <article
  className={`game-card ${
    game.title === "Brinck Odisea"
      ? "featured-game"
      : ""
  }`}
  key={game.id}
>

            <div className="game-card-top">

              <span className="game-number">
                #{String(game.id).padStart(2, "0")}
              </span>

              <span className="game-status">
                {game.status}
              </span>

            </div>


            <div className="game-preview">

  {game.image ? (
    <img
      src={game.image}
      alt={game.title}
      className="game-image"
    />
  ) : (
    <span className="game-controller">
      🎮
    </span>
  )}

  <span className="scan-line"></span>

</div>

            <div className="game-content">

              <h3>
                {game.title}
              </h3>

              <p>
                {game.description}
              </p>


              <div className="game-info">

                <span>
                  🛠 {game.technology}
                </span>

                <span>
                  📅 {game.year}
                </span>

              </div>


       <div className="game-actions">

  {game.status === "Completed" && game.link !== "#" ? (
    <a
      href={game.link}
      target="_blank"
      rel="noopener noreferrer"
      className="play-button"
    >
      {t("gameLab.play")}
    </a>
  ) : (
    <span className="game-development">
      {t("gameLab.inDevelopment")}
    </span>
  )}

  {game.github && game.github !== "#" && (
    <a
      href={game.github}
      className="github-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("webLab.github")}
    </a>
  )}

</div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default GameLab;