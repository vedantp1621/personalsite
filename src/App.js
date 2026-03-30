import "./App.css";
import { useState, useEffect } from "react";

import Navbar from "./Sections/Navbar";
import Header from "./Sections/Header";
import AboutMe from "./Sections/AboutMe";
import Work from "./Sections/Work";
import ProjectsModern from "./Sections/ProjectsModern";
import Footer from "./Sections/Footer";
import ScrollPathBackground from "./components/ScrollPathBackground";

function useSectionBg() {
  const [bgColor, setBgColor] = useState("rgb(140,62,62)");
  useEffect(() => {
    const onScroll = () => {
      const t = Math.min(Math.max((window.scrollY - 1200) / 2000, 0), 1);
      const r = Math.floor(140 + (28 - 140) * t);
      const g = Math.floor(62  + (28 - 62)  * t);
      const b = Math.floor(62  + (28 - 62)  * t);
      setBgColor(`rgb(${r},${g},${b})`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return bgColor;
}

function App() {
  const bgColor = useSectionBg();

  return (
    <div style={{ backgroundColor: bgColor }}>
      <Navbar bgColor={bgColor} />
      <Header />
      <div className="relative overflow-visible">
        <AboutMe />
        <Work />
        <ProjectsModern />
        <ScrollPathBackground />
      </div>
      <Footer />
    </div>
  );
}

export default App;
