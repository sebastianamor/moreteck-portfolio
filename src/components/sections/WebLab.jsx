import projects from "../../data/projects";
import "./WebLab.css";

function WebLab() {
  return (
    <section id="web-lab" className="web-lab">

      <div className="web-lab-header">

    <span className="lab-tag">
  &gt; WEB_LAB.exe
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

  <div className="project-card-top">

    <span className="project-number">
      #{String(project.id).padStart(2, "0")}
    </span>

    <span className="project-category">
      {project.category}
    </span>

  </div>

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

  <div className="project-footer">

  <span className="project-status">
    ✓ {project.status}
  </span>

  <div className="project-links">

    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project ↗
    </a>

    {project.github && project.github !== "#" && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
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

export default WebLab;