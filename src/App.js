import "./App.css";

import Navbar from "./Sections/Navbar";
import Header from "./Sections/Header";
import AboutMe from "./Sections/AboutMe";
import Work from "./Sections/Work";
import Projects from "./Sections/Projects";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Work />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
