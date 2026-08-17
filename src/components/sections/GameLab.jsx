import games from "../../data/games";
import "./GameLab.css";

function GameLab() {
  return (
    <section id="game-lab" className="game-lab">

      <div className="game-lab-header">

        <span className="game-terminal">
          &gt; GAME_LAB.exe
        </span>

        <h2>
          Game Development
        </h2>

        <p>
          Games, prototypes and experiments created
          while exploring the world of game development.
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

  {game.status === "Completed" ? (
    <a
      href={game.link}
      className="play-button"
    >
      ▶ PLAY
    </a>
  ) : (
    <span className="development-button">
      🚧 IN DEVELOPMENT
    </span>
  )}

  {game.github && game.github !== "#" && (
    <a
      href={game.github}
      className="github-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      GITHUB ↗
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