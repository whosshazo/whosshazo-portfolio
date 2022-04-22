import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  NavbarText,
  Nav,
  Fade,
} from "reactstrap";

function Navigation(props) {
  return (
    <div>
      <Fade>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">WHOS.SHAZO</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Photography</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contact</NavLink>
              </NavItem>
              {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}
            </Nav>
            {/* <NavbarText>WHOS.SHAZO</NavbarText> */}
          </Collapse>
        </Navbar>
      </Fade>
    </div>
  );
}

export default Navigation;
