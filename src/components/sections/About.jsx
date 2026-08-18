import "./About.css";
function About() {
  return (
    <section id="about" className="about">

      <div className="about-header">

        <span className="about-tag">
          &gt; SYSTEM_PROFILE.exe
        </span>

        <h2>
          About Me
        </h2>

        <p>
          Developer, programmer and game creator
          exploring technology through code.
        </p>

      </div>


      <div className="about-content">

        <div className="about-intro">

          <h3>
            Sebastián Moreira
          </h3>

          <p>
            My journey into technology started with
            curiosity about how things work.
          </p>

          <p>
            Over time, that curiosity evolved into
            web development, programming and game
            development.
          </p>

          <p>
            Today I build web applications, experiment
            with different technologies and create games
            as a way to keep learning.
          </p>

        </div>


        <div className="about-terminal">

          <div className="terminal-header">
            <span>MORETECK SYSTEM</span>
            <span>● ● ●</span>
          </div>

          <div className="terminal-body">

            <p>
              <span>&gt;</span> SYSTEM STATUS:
              <strong> ONLINE</strong>
            </p>

            <p>
              <span>&gt;</span> WEB DEVELOPMENT:
              <strong> ACTIVE</strong>
            </p>

            <p>
              <span>&gt;</span> GAME DEVELOPMENT:
              <strong> ACTIVE</strong>
            </p>

            <p>
              <span>&gt;</span> EXPERIMENTATION:
              <strong> ACTIVE</strong>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;