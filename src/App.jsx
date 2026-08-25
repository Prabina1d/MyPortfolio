import Navbar from "./components/Navbar";

import About from "./components/About";

import GithubProjects from "./components/GithubProjects";
import Blog from "./components/Blog";
import Articles from "./components/Articles";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        

        <About />

        

        <GithubProjects />

        <Blog />

        <Articles />

        <Location />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;