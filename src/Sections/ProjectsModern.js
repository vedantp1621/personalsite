import ModernCard from "../components/ModernCard";
import { projectCards } from "../data/portfolio";

export default function ProjectsModern({ onBackHome }) {
  return (
    <main id="main-content" tabIndex="-1" className="projects-page">
      <section
        id="projects"
        className="projects section-pad"
        aria-labelledby="project-archive-title"
      >
        <header className="project-archive-heading">
          <button
            type="button"
            className="archive-back-link"
            onClick={onBackHome}
          >
            Back to main
          </button>
          <div className="project-notebook-topline">
            <p className="eyebrow">Engineering notebook</p>
            <span>{projectCards.length} projects</span>
          </div>
          <h1 id="project-archive-title" tabIndex="-1">
            Other projects<span className="accent">.</span>
          </h1>
          <p>
            A modern showcase of recent systems, AI demos, and full-stack
            engineering work.
          </p>
          <div className="project-notebook-rule" aria-hidden="true" />
        </header>
        <div className="project-list">
          {projectCards.map((project) => (
            <ModernCard key={project.title} {...project} />
          ))}
        </div>
        <div className="project-archive-footer">
          <p>Always learning. Always building.</p>
          <button type="button" className="box-link" onClick={onBackHome}>
            Back to main
          </button>
        </div>
      </section>
    </main>
  );
}
