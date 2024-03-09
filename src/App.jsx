import About from "./about/About";
import { Contact } from "./contact/Contact";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import "./index.css";
import NavBar from "./navBar/NavBar";
import Projects from "./projects/Projects";
const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
