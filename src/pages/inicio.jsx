import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Inicio() {
  return (
    <div className="home-page">
      <Container className="home-cont">

            <Row className="justify-content-center">
                <Col className='text-center' xs="auto">
                    <img src="imagenes/logo.jpeg" alt="Luna & Granos logo" className="home-logo" />
                </Col>
            </Row>


            <Row className="justify-content-center">
              <Col xs={12} md={10} className="text-center">
                <p className="home-descrip">
                  Experimenta momentos mágicos con
                  <br />
                  cada sorbo en nuestra acogedora cafetería.
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs={12} md={10}>
                <div className="cont-img-bot">
                    <picture>
                      <source srcSet="imagenes/imagenPrincipal.png" media="(max-width: 768px)" />
                    <img
                      src="imagenes/home-image.png"
                      alt="Cafetería Luna & Granos"
                      className="home-image"
                    />
                    </picture>
                  <Link to="/carta" className="boton-inicio-link" aria-label="Ir a la carta">
                      <Button className='boton-inicio'> CARTA </Button>
                  </Link>
                </div>
              </Col>
            </Row>

        </Container>
      
    </div>
  )
}