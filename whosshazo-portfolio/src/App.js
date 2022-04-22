import React from "react";
import Navigation from "./components/Navigation/navigation.js";
import About from "./components/About/about";
// import Contact from "./components/Contact/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Projects from "./components/Projects/projects.js";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
        <Projects>
          
        </Projects>
        {/* <Contact></Contact>  */}
      </main>
    </div>
  );
}

export default App;
