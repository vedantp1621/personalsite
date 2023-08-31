import './App.css';
import Navbar from "./Sections/Navbar";
import Header from "./Sections/Header";
import AboutMe from "./Sections/AboutMe"
import Work from './Sections/Work';
import Contact from './Sections/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
