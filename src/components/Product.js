import React, { useState } from 'react';
import './Product.css';

function Product(props) {
  const { name, artist, price, imageUrl, carrito, setCarrito } = props;
  const [mensajeVisible, setMensajeVisible] = useState(false);
  
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);

  const handleBuyClick = () => {
    // Copia los productos existentes en el carrito y agrega el producto actual
    const nuevoCarrito = [...carrito, props];
    // Actualiza el carrito utilizando la función setCarrito
    const updatedCarrito = [...carrito, { name, price }];
    setCarrito(updatedCarrito);
    setCarrito(nuevoCarrito);
    setCantidadEnCarrito(cantidadEnCarrito + 1);

    setMensajeVisible(true);
    setTimeout(() => {
      setMensajeVisible(false);
    }, 1000);
  };

  return (
    <div className="product">
      <div className="product-container">
        <img src={imageUrl} alt={name} style={{ width: '200px', height: '200px' }} className="product-image" />
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{artist}</p>
        <p className="product-price">${price}</p>
        <button className="product-button" onClick={handleBuyClick}>Comprar</button>
        {mensajeVisible && (
      <div className="mensaje">
        <p>Agregado al carrito exitosamente</p>
      </div>
    )}
      </div>
    </div>
  );
}

export default Product;
