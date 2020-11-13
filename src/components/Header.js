import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Header(props) {
  const sort = (sortType) => {
    props.sortProp(sortType);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Hacker News app</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/top">Top</Nav.Link>
          <Nav.Link href="/new">New</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <NavDropdown title="Sort" id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={() => sort("dateDesc")}>
              Date descending
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => sort("dateAsc")}>
              Date ascending
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => sort("score")}>
              Score descending
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/wojot">Created by</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
