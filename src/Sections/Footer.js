import logo from "../assets/branding/vp-wisconsin-red.svg";
export default function Footer() {
  return (
    <footer id="contact" className="contact section-pad">
      <p className="eyebrow">Have something in mind?</p>
      <h2>
        Let's make
        <br />
        it happen<span>.</span>
      </h2>
      <p className="contact-thanks">
        Thank you for taking time to view my page. Here are my contacts!
      </p>
      <div className="contact-links">
        <a href="mailto:vppatel3@wisc.edu">vppatel3@wisc.edu</a>
        <a href="tel:+18154165778">(815)-416-5778</a>
      </div>
      <div className="footer-bottom">
        <img src={logo} alt="VP personal branding" loading="lazy" />
        <span>Vedant Patel</span>
        <div>
          <a href="https://github.com/vedantp1621">GitHub</a>
          <a href="https://www.linkedin.com/in/vedant-p-patel/">LinkedIn</a>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
