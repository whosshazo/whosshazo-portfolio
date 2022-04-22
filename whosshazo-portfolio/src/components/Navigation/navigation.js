import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function Navigation(props) {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink active href="#">
            About Me
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Photography
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;
