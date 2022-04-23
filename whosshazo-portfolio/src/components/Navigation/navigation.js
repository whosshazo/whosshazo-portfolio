import React from "react";
import "./navigation.css";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  Fade,
} from "reactstrap";

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    projectsSelected,
    currentCategory,
    setProjectsSelected,
  } = props;

  return (
    <div className="nav">
      <Fade>
        <Navbar expand="md" light>
          <NavbarBrand href="/">WHOS.SHAZO</NavbarBrand>

          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink
                  href="#about"
                  onClick={() => setProjectsSelected(false)}
                >
                  About Me
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#projects"
                  className={`mx-2 ${projectsSelected && "navActive"}`}
                  onClick={() => setProjectsSelected(true)}
                >
                  Projects
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/components/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fade>
    </div>
  );
}

export default Navigation;
