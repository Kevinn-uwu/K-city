import React, { useState } from 'react';
import './Carrito.css';

function Carrito({ carrito, setCarrito }) {

  const [mensajeVisible, setMensajeVisible] = useState(false);

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.price, 0);
  };

  const pagar = () => {
    setMensajeVisible(true);
  
    setTimeout(() => {
      setCarrito([]);
      setMensajeVisible(false);
    }, 2000);
  };
  

  return (
    <div className="carrito">
      <h2>Tu Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="carrito-lista">
          {carrito.map((producto, index) => (
            <li key={index} className="carrito-item">
              <div className="carrito-info">
                <img src={producto.imageUrl} alt={producto.name} className="carrito-imagen" />
                <div className="carrito-detalle">
                  <h3>{producto.name}</h3>
                  <p>Artista: {producto.artist}</p>
                  <p>Precio: ${producto.price}</p>
                </div>
              </div>
              <button onClick={() => eliminarDelCarrito(index)} className="carrito-eliminar">
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {carrito.length > 0 && (
        <p className="carrito-total">Total: ${calcularTotal()}</p>
      )}
    {carrito.length > 0 && (
      <button className="product-button" onClick={pagar}>
        Pagar
      </button>
    )}

    {mensajeVisible && (
      <div className="mensaje-confirmacion">
        <p>Su compra fue realizada</p>
      </div>
    )}
      
    </div>
  );
}

export default Carrito;