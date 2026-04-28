import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

function Navegacion({carrito}) {
  const totalCantidad= carrito.reduce((total,producto)=> total + producto.cantidad, 0);
  return (
    <>
      <Navbar className="mi-navbar" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="imagenes/nombreLogo.PNG" alt="Luna & Granos Café" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/carta">Carta</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            </Nav>

            <Nav className="ms-auto carrito-container">
            <Nav.Link as={Link} to="/carrito" className="position-relative">
              <img src="imagenes/carrito.png" alt="Carrito" className="carrito-icon" />
              {totalCantidad > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {totalCantidad}
              </Badge>
              )}
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegacion;
