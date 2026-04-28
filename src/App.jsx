import { Navigate, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import Inicio from "./pages/inicio"
import Carta from "./pages/Carta"
import Carrito from "./pages/Carrito"
import Contacto from "./pages/Contacto"
import Nosotros from "./pages/Nosotros"
import Footer from "./components/Footer"
import Navegacion from "./components/Navegacion";


function App() {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });
  
useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  
  const agregarAlCarrito = (producto) => {
    const existe = carrito.find(p => p.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map(p =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter(p => p.id !== id));
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
  setCarrito(prevCarrito =>
    prevCarrito.map(producto =>
      producto.id === id
        ? { ...producto, cantidad: nuevaCantidad } 
        : producto
    )
  );
};

  return (
    <>
      <Navegacion carrito={carrito} />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/carta" element={<Carta agregarAlCarrito={agregarAlCarrito} />} />
          <Route
            path="/carrito"
            element={
              <Carrito
                carrito={carrito}
                eliminarProducto={eliminarProducto}
                actualizarCantidad={actualizarCantidad}
              />
            }
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
