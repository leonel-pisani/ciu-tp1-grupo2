import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {

    return(
         <footer className="footer mt-auto py-4">
            <Container>
                <Row className="align-items-center text-center text-md-start">
                {/* Contacto */}
                <Col md={6} className="mb-3 mb-md-0">
                <h5 className="footer-title">Luna & Granos Café</h5>
                <p className="mb-1">📍 Av. Siempre Viva 123, Buenos Aires</p>
                <p className="mb-0">
                <FaEnvelope className="me-2" />
                contacto@lunaygranos.com
                </p>
                </Col>
                {/* Redes sociales */}
                <Col md={6} className="text-center text-md-end">
                    <a href="https://instagram.com" className="footer-icon me-3">
                    <FaInstagram />
                    </a>
                    <a href="https://facebook.com" className="footer-icon me-3">
                    <FaFacebook />
                    </a>
                    <a href="https://twitter.com" className="footer-icon me-3">
                    <FaTwitter />
                    </a>
                </Col>
                </Row>
                <Row className="justify-content-center">
                <Col md={6} className="text-center">
                    <p>© Luna & Granos Café. Todos los derechos reservados.</p>                    
                </Col>
                </Row>
            </Container>
        </footer>

    ); 

}

export default Footer;