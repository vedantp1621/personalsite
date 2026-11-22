import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Sections/Navbar";
import Header from "./Sections/Header";
import AboutMe from "./Sections/AboutMe";
import Work from "./Sections/Work";
import CampusInvolvement from "./Sections/CampusInvolvement";
import ProjectsModern from "./Sections/ProjectsModern";
import Footer from "./Sections/Footer";
import PhotoVault from "./Sections/PhotoVault";
import ScrollPathBackground from "./components/ScrollPathBackground";
import { preloadVaultCamera } from "./lib/vaultCameraAssets";
const getScreen = () => {
  if (window.location.hash === "#/photo-vault") return "photo-vault";
  if (window.location.hash === "#/projects") return "projects";
  return "home";
};
export default function App() {
  const [currentScreen, setCurrentScreen] = useState(getScreen);
  useEffect(() => {
    preloadVaultCamera();
  }, []);
  useEffect(() => {
    const onHash = () => setCurrentScreen(getScreen());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  useEffect(() => {
    const titles = {
      home: "Vedant Patel | Software Engineer",
      "photo-vault": "Photo Vault | Vedant Patel",
      projects: "Other Projects | Vedant Patel",
    };
    document.title = titles[currentScreen];
    window.scrollTo({ top: 0, behavior: "instant" });
    const headingId =
      currentScreen === "photo-vault"
        ? "photo-vault-title"
        : currentScreen === "projects"
          ? "project-archive-title"
          : null;
    if (headingId)
      document.getElementById(headingId)?.focus({ preventScroll: true });
    const fragment = window.location.hash.slice(1);
    if (currentScreen === "home" && fragment && !fragment.startsWith("/")) {
      const frame = requestAnimationFrame(() =>
        document.getElementById(fragment)?.scrollIntoView(),
      );
      return () => cancelAnimationFrame(frame);
    }
    return undefined;
  }, [currentScreen]);
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
    window.location.hash =
      screen === "photo-vault"
        ? "#/photo-vault"
        : screen === "projects"
          ? "#/projects"
          : "#/";
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <div
      className={`site-shell ${currentScreen === "photo-vault" ? "vault-shell" : ""}`}
    >
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to content
      </a>
      <Navbar currentScreen={currentScreen} onNavigate={navigateTo} />
      {currentScreen === "photo-vault" ? (
        <PhotoVault onBackHome={() => navigateTo("home")} />
      ) : currentScreen === "projects" ? (
        <ProjectsModern onBackHome={() => navigateTo("home")} />
      ) : (
        <>
          <main id="main-content" tabIndex="-1">
            <Header />
            <div className="portfolio-body">
              <AboutMe />
              <Work />
              <CampusInvolvement />
              <ScrollPathBackground />
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
