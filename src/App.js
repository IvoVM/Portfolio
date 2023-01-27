import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProfessionalProjects } from "./components/ProfessionalProjects";

import  NewSkills  from "./components/NewSkills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <NewSkills />
      <ProfessionalProjects />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
