import {
  workExperiences,
  experienceWebsites,
  technicalSkills,
  featuredProjects,
} from "../data/portfolio";

function OrganizationLogo({ experience }) {
  return (
    <div
      className="resume-logo"
      style={{ backgroundColor: experience.logoColor || "#fff" }}
    >
      <img src={experience.logo} alt={experience.logoAlt} loading="lazy" />
    </div>
  );
}

function ExperienceEntry({ experience, compact = false }) {
  return (
    <article
      className={`resume-entry ${compact ? "resume-entry-compact" : ""}`}
    >
      <OrganizationLogo experience={experience} />
      <div className="resume-entry-copy">
        <p className="resume-date">{experience.date}</p>
        <h4>{experience.company}</h4>
        <p className="resume-role">{experience.title}</p>
        <div className="resume-entry-bottom">
          <span>{experience.location}</span>
          {experienceWebsites[experience.company] && (
            <a
              href={experienceWebsites[experience.company]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${experience.company} website`}
            >
              Website
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function SpotlightProjects() {
  return (
    <section className="resume-spotlights" aria-labelledby="spotlight-title">
      <div className="resume-panel-top">
        <p className="eyebrow">Selected builds</p>
        <span className="resume-star" aria-hidden="true">
          ✦
        </span>
      </div>
      <h3 id="spotlight-title">Projects in focus.</h3>
      <div>
        {featuredProjects.map(({ project, logo, mark, category, summary }) => (
          <article
            className="spotlight-project"
            data-project={project.title}
            key={project.title}
          >
            <div className="spotlight-logo">
              {logo ? (
                <img src={logo} alt={`${project.title} logo`} loading="lazy" />
              ) : (
                <span aria-label={`${project.title} monogram`}>{mark}</span>
              )}
            </div>
            <div>
              <p className="spotlight-category">{category}</p>
              <h4>{project.title}</h4>
              {summary && <p className="spotlight-summary">{summary}</p>}
              <a
                className="spotlight-link"
                href={project.actions[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} website`}
              >
                Visit website
              </a>
            </div>
          </article>
        ))}
      </div>
      <a className="resume-all-projects" href="#/projects">
        Browse other projects
      </a>
    </section>
  );
}

export default function Work() {
  return (
    <section id="experience" className="experience">
      <div className="resume-surface">
        <header className="resume-heading">
          <div>
            <p className="eyebrow">The work, the tools, the ideas.</p>
            <h2>
              Experience
              <br />& craft<span>.</span>
            </h2>
          </div>
          <p>
            A timeline of my professional work, projects, and technical skills.
          </p>
        </header>
        <div className="resume-board">
          <section
            className="resume-experience"
            aria-labelledby="featured-experience-title"
          >
            <div className="resume-panel-top">
              <p className="eyebrow">Professional journey</p>
              <span className="resume-star" aria-hidden="true">
                ✦
              </span>
            </div>
            <h3 id="featured-experience-title">
              Work
              <br />
              experience.
            </h3>
            <div className="resume-featured-entries">
              {workExperiences.slice(0, 4).map((experience) => (
                <ExperienceEntry
                  key={experience.company}
                  experience={experience}
                />
              ))}
            </div>
            <div className="resume-keywords">
              <span>Engineering</span>
              <span>Research</span>
              <span>Real-world systems</span>
            </div>
          </section>
          <div className="resume-right-column">
            <section
              className="resume-skills"
              aria-labelledby="technical-skills-title"
            >
              <p className="eyebrow">The toolkit</p>
              <h3 id="technical-skills-title">
                Technical
                <br />
                skills.
              </h3>
              <p className="resume-skills-note">
                Technologies across my projects and interests.
              </p>
              <div className="resume-skill-grid">
                {technicalSkills.map((group) => (
                  <div key={group.title}>
                    <h4>{group.title}</h4>
                    <ul>
                      {group.items.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            <SpotlightProjects />
          </div>
        </div>
      </div>
      <div className="resume-endcap" aria-hidden="true" />
    </section>
  );
}
