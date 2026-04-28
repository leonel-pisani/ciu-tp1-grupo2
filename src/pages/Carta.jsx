import React, { useState } from 'react';
import ListaProducto from '../components/ListaProducto'
import {Container, Button, ButtonGroup} from "react-bootstrap";



import medialuna from "../assets/medialuna.png"
import latte from "../assets/latte.png"
import brownie from "../assets/brownie.png"
import cheesecake from "../assets/cheesecake.png"
import sanjyq from "../assets/san-jyq.png"
import expresso from "../assets/expresso.png"
import teVerde from "../assets/te-verde.png"
import cappuccino from "../assets/cappuccino.png"


function Carta({agregarAlCarrito}) {
  const [categoriaFiltro, setCategoriaFiltro]= useState("todos");

  const productos = [
    { id: 1, nombre: "Café Espresso", precio: 500, categoria: "bebidas", imagen: expresso },
    { id: 2, nombre: "Café Latte", precio: 700, categoria: "bebidas", imagen: latte },
    { id: 3, nombre: "Café Cappuccino", precio: 750, categoria: "bebidas", imagen: cappuccino },
    { id: 4, nombre: "Té Verde", precio: 400, categoria: "bebidas", imagen: teVerde },
    { id: 5, nombre: "Medialuna", precio: 300, categoria: "pastelería", imagen: medialuna },
    { id: 6, nombre: "Tostado Jamón y Queso", precio: 1200, categoria: "pastelería", imagen: sanjyq },
    { id: 7, nombre: "Brownie", precio: 600, categoria: "pastelería", imagen: brownie },
    { id: 8, nombre: "Cheesecake", precio: 850, categoria: "pastelería", imagen: cheesecake},
  ];

  const productosFiltrados=productos.filter(
    (prod)=> categoriaFiltro === "todos" || prod.categoria === categoriaFiltro
  );
   

  return (
    <Container className="mt-4">
      <ButtonGroup className="mb-3">
        <Button
          variant={categoriaFiltro === "todos" ? "primary" : "secondary"}
          onClick={() => setCategoriaFiltro("todos")}
        >
          Todos
        </Button>
        <Button
          variant={categoriaFiltro === "bebidas" ? "primary" : "secondary"}
          onClick={() => setCategoriaFiltro("bebidas")}
        >
          Bebidas
        </Button>
        <Button
          variant={categoriaFiltro === "pastelería" ? "primary" : "secondary"}
          onClick={() => setCategoriaFiltro("pastelería")}
        >
          Pastelería
        </Button>
      </ButtonGroup>

      {/* Lista de productos filtrados */}
      <ListaProducto 
        productos={productosFiltrados} 
        agregarAlCarrito={agregarAlCarrito}
      />
      
    </Container>
  );
}


export default Carta;
