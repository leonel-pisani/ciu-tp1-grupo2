import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function CartaProducto({ producto, onAdd }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="product-car h-100 shadow-sm">
        <Card.Img
          variant="top"
          src={producto.imagen}
          alt={producto.nombre}
          className="product-image"
        />

        <Card.Body className="d-flex flex-column">
          <Card.Title className="producto-titulo">{producto.nombre}</Card.Title>
          <Card.Text className="producto-precio">
            Precio: ${producto.precio}
          </Card.Text>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              variant="primary"
              className="boton-car"
              onClick={() => onAdd(producto)}
            >
              Agregar al carrito
            </Button>
          </motion.div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default CartaProducto;
