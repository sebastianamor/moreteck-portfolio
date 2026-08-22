import projects from "../../data/projects";
import "./WebLab.css";
import { useTranslation } from "react-i18next";


function WebLab() {

  const { t } = useTranslation();
  return (
    <section id="web-lab" className="web-lab">

      <div className="web-lab-header">
        <span className="lab-tag">
  {t("webLab.tag")}
</span>

<h2>
  {t("webLab.title")}
</h2>

<p>
  {t("webLab.description")}
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
                {t(project.categoryKey)}
              </span>
            </div>

            <h3>
              {t(project.titleKey)}
            </h3>

            <p>
              {t(project.descriptionKey)}
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
                ✓ {t(project.statusKey)}
              </span>

              <div className="project-links">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("webLab.viewProject")}
                  </a>
                )}

                {project.github !== "#" && (
                  <a
                    href={project.github}
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

export default WebLab;