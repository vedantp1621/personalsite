import "./App.css";
import { useEffect, useRef } from "react";

import Navbar from "./Sections/Navbar";
import Header from "./Sections/Header";
import AboutMe from "./Sections/AboutMe";
import Work from "./Sections/Work";
import ProjectsModern from "./Sections/ProjectsModern";
import Footer from "./Sections/Footer";
import ScrollPathBackground from "./components/ScrollPathBackground";

function App() {
  const rootRef = useRef(null);
  const navRef = useRef(null);
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  useEffect(() => {
    const onScroll = () => {
      const t = Math.min(Math.max((window.scrollY - 1200) / 2000, 0), 1);
      const r = Math.floor(140 + (28 - 140) * t);
      const g = Math.floor(62  + (28 - 62)  * t);
      const b = Math.floor(62  + (28 - 62)  * t);
      const color = `rgb(${r},${g},${b})`;
      if (rootRef.current) rootRef.current.style.backgroundColor = color;
      if (navRef.current)  navRef.current.style.backgroundColor  = color;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={rootRef} style={{ backgroundColor: "rgb(140,62,62)" }}>
      <Navbar navRef={navRef} />
      <Header />
      <div className="relative overflow-visible">
        <AboutMe />
        <Work />
        <ProjectsModern />
        {!isMobile && <ScrollPathBackground />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
