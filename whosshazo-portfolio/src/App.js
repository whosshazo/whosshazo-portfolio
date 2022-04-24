import React, { useState } from "react";
import Navigation from "./components/Navigation/navigation.js";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/projects.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [categories] = useState([
    {
      name: "about",
      description: "About me section",
    },
    {
      name: "projects",
      description:
        "recently finished projects, or projects currently being worked on",
    },
    {
      name: "contact",
      description: "email form to get in contact with me",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [projectsSelected, setProjectsSelected] = useState(false);

  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        projectsSelected={projectsSelected}
        setProjectsSelected={setProjectsSelected}
      ></Navigation>
      <main>
        {!projectsSelected ? (
          <>
            <About currentCategory={currentCategory}></About>

            <Contact></Contact>
          </>
        ) : (
          <Projects></Projects>
        )}
      </main>
    </div>
  );
}

export default App;
