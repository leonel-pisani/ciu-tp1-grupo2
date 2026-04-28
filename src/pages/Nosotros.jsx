import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Modal, Image, Alert } from "react-bootstrap";
import imagenNosotros from "../assets/imagenNosotros.png";

export default function Nosotros() {
  const [comentario, setComentario] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <Container className="my-5">

      <Row className="justify-content-center mb-4">
        <Col xs={12} md={8} lg={6} className="text-center">
          <Image
            src={imagenNosotros}
            alt="Nosotros"
            fluid
            rounded
          />
        </Col>
      </Row>

      <Row className="justify-content-center mb-5">
        <Col xs={12} md={10} lg={8}>
          <h2 className="home-descrip">Sobre Nosotros</h2>
          <p className= "home-descrip" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Brindamos nuestros servicios hace más de 10 años, compartiendo nuestra
            pasión por el café, la hospitalidad y el buen trato con cada persona
            que entra a nuestra cafetería. Nuestro compromiso es generar un espacio
            cálido donde cada cliente se sienta como en casa.  
            <br /><br />
            Nuestros empleados — <strong>Mai, Ethne, Fran, Leo y Fede</strong> —
            forman un equipo que combina experiencia, entusiasmo y dedicación.
            Cada uno aporta su toque personal, logrando que cada visita sea única.
            Creemos en el poder de los pequeños detalles, en una sonrisa sincera y
            en una taza de café preparada con amor.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-5">
        <Col xs={12} md={10} lg={8}>
            <hr style={{ borderTop: "2px solid #6f4e37" }} />
        </Col>
    </Row>         


      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          {!enviado ? (
            <Form onSubmit={handleSubmit}>
              <h3 className="home-descrip">Contanos tu experiencia con nosotros</h3>
              <Form.Group className="mb-3" controlId="comentario">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Escribí tu comentario aquí..."
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="dark" type="submit">
                  Enviar
                </Button>
              </div>
            </Form>
          ) : (
            <Alert variant="success" className="text-center">
              ¡Gracias por enviarnos tu comentario!
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}