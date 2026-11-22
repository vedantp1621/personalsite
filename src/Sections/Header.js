import Typer from "./Typer";
import profileImg from "../assets/images/portraits/vedant.jpg";
import resume from "../assets/documents/vedant-patel-resume.pdf";
import { interests } from "../data/portfolio";
export default function Header() {
  return (
    <header className="hero" id="home">
      <div className="hero-topline">
        <span>Software engineer & student</span>
        <span>University of Wisconsin–Madison</span>
      </div>
      <h1 className="hero-name" aria-label="Vedant Patel">
        <span>Vedant</span>
        <span>
          Patel<span className="name-period">.</span>
        </span>
      </h1>
      <div className="hero-bottom">
        <div className="hero-introduction">
          <p className="eyebrow">Hi. I'm Vedant Patel</p>
          <p>
            A <strong>University of Wisconsin-Madison</strong> student
            interested in <Typer dataText={interests} />
          </p>
          <div className="hero-links">
            <a
              className="box-link"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/vedant-p-patel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-link"
              href="https://github.com/vedantp1621"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <figure className="hero-portrait">
        <img src={profileImg} alt="Vedant Patel" fetchpriority="high" />
        <figcaption>A little curiosity. A lot of building.</figcaption>
      </figure>
    </header>
  );
}
