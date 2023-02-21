
import { Navbar as NavbarBTS, Container, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const NavbarComp = () => {
  return (
    <NavbarBTS bg="light" expand="lg">
    <Container fluid>
      <NavbarBTS.Brand href="#home">TP Movies</NavbarBTS.Brand>
      <NavbarBTS.Toggle aria-controls="basic-navbar-nav" />
      <NavbarBTS.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/upcoming">
            Upcoming
          </NavLink>
          <NavLink className="nav-link" to="/popular">
            Popular
          </NavLink>
          <NavLink className="nav-link" to="/search">
            Search
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </Nav>
      </NavbarBTS.Collapse>
    </Container>
  </NavbarBTS>
  );
}

export default NavbarComp ;
