import campusPhoto from "../assets/images/campus/madison-campus.jpg";
import { campusClubs } from "../data/portfolio";

export default function CampusInvolvement() {
  return (
    <section id="campus" className="campus" aria-labelledby="campus-title">
      <figure className="campus-photo">
        <img
          src={campusPhoto}
          alt="Bascom Hall and a red Wisconsin banner framed by trees on the Madison campus"
          width="408"
          height="612"
          loading="lazy"
        />
        <figcaption>University of Wisconsin–Madison</figcaption>
      </figure>
      <header className="campus-heading">
        <p className="eyebrow">University of Wisconsin–Madison</p>
        <h2 id="campus-title">Campus<br />involvement<span>.</span></h2>
      </header>
      <div className="campus-content">
        <ul className="campus-clubs">
          {campusClubs.map((club) => (
            <li className="campus-club" key={club.company}>
              <img src={club.logo} alt="" width="44" height="44" loading="lazy" />
              <div>
                <h3>{club.company}</h3>
                <p>{club.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
