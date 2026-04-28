import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Carrito({ carrito, eliminarProducto, actualizarCantidad }) {
  const [mostrarModal, setMostrarModal] = useState(false);

  const totalCarrito = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

  const confirmarPedido = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <div className="container my-4">
      <h2>Tu Pedido</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ListGroup as="ol" numbered>
          {carrito.map(producto => (
            <ListGroup.Item
              key={producto.id}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{producto.nombre}</div>
                Precio unitario: ${producto.precio}
              </div>
              <div className="d-flex flex-column align-items-end">
                <Badge bg="primary" pill>
                  ${producto.precio * producto.cantidad}
                </Badge>
                
                {/*controles para modificar cantidad*/}
                <div className="d-flex align-items-center mt-2">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() =>
                      producto.cantidad > 1
                        ? actualizarCantidad(producto.id, producto.cantidad - 1)
                        : eliminarProducto(producto.id) // si llega a 0, eliminar
                    }
                  >
                    -
                  </Button>
                  <span className="mx-2">{producto.cantidad}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() =>
                      actualizarCantidad(producto.id, producto.cantidad + 1)
                    }
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  className="mt-2"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  Eliminar
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      <div className="mt-3 d-flex justify-content-between">
        <h5>Total:</h5>
        <h5>${totalCarrito}</h5>
      </div>

      <div className="text-end">
        <Button variant="success" onClick={confirmarPedido} disabled={carrito.length === 0}>
          Confirmar Pedido
        </Button>
      </div>

      <Modal show={mostrarModal} onHide={cerrarModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pedido Confirmado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡Gracias por tu pedido! Lo estamos preparando 😊
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Carrito;