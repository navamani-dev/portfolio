import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App overflow-hidden">
      <Header />
      <main>
        <Content />
        <AboutMe />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
