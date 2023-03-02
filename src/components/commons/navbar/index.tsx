
import { Navbar as NavbarBTS, Container, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useMe } from "../../../hooks";


const NavbarComp = () => {
  
  const { logout } = useMe();

  return (
    <NavbarBTS bg="dark" variant="dark" expand="lg">
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
          <NavDropdown title="User" id="collasible-nav-dropdown">
              <NavDropdown.Item variant="dark" > 
                <NavLink className="nav-link" to="/register">

                  Register
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <Nav.Link onClick={logout}>Sign out</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>


        </Nav>
      </NavbarBTS.Collapse>
    </Container>
  </NavbarBTS>
  );
}

export default NavbarComp ;
