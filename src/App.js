import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Skills from "./Components/skills";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Work/>
      <Contact></Contact>
    </div>
  );
}

export default App;
