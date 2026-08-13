import projects from "../../data/projects";
import "./WebLab.css";

function WebLab() {
  return (
    <section id="web-lab" className="web-lab">

      <div className="web-lab-header">

        <span className="lab-tag">
          💻 WEB LAB
        </span>

        <h2>
          Web Applications & Experiments
        </h2>

        <p>
          Projects, experiments and applications
          built during my journey as a developer.
        </p>

      </div>


      <div className="projects-grid">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.id}
          >

            <span className="project-category">
              {project.category}
            </span>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="technologies">

              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}

            </div>

            <a href={project.link}>
              View Project →
            </a>

          </article>

        ))}

      </div>

    </section>
  );
}

export default WebLab;