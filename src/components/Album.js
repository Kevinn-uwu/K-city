import React from 'react';
import Product from './Product';
import anti from '../assets/anti.jpg'
import crazy from '../assets/crazy.jpg'
import feel from '../assets/feel.jpg'
import imade from '../assets/imade.jpg'
import low from '../assets/low.jpg'
import nwjns from '../assets/nwjns.jpg'
import square from '../assets/square.jpg'
import teen from '../assets/teen.jpg'
import what from '../assets/whatis.jpg'

function Album({ agregarAlCarrito, carrito, setCarrito }) {
  const products = [
    {
      id: 1,
      name: 'Antifragile',
      artist: 'Le Sserafim',
      price: 620,
      imageUrl: anti,
    },
    {
      id: 2,
      name: 'Crazy in love',
      artist: 'Itzy​',
      price: 564,
      imageUrl: crazy,
    },
    {
        id: 3,
        name: 'Red Velvet The ReVe Festival 2022',
        artist: 'Red Velvet',
        price: 601,
        imageUrl: feel,
      },

      {
        id: 4,
        name: 'I Made',
        artist: '(G)I-dle',
        price: 719,
        imageUrl: imade,
      },
      {
        id: 5,
        name: 'Lowlife Princess - Noir',
        artist: 'Bibi',
        price: 641,
        imageUrl: low,
      },
      {
        id: 6,
        name: 'New Jeans',
        artist: 'New jeans',
        price: 589,
        imageUrl: nwjns,
      },
      {
        id: 7,
        name: 'Square up',
        artist: 'Blackpink',
        price: 731,
        imageUrl: square,
      },
      {
        id: 8,
        name: 'Teenfresh',
        artist: 'StayC',
        price: 574,
        imageUrl: teen,
      },
      {
        id: 9,
        name: 'What is love?',
        artist: 'Twice',
        price: 582,
        imageUrl: what,
      },
  ];

  return (
    <div className="album">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          artist={product.artist}
          price={product.price}
          imageUrl={product.imageUrl}
          carrito={carrito} // Pasa el carrito como prop
          setCarrito={setCarrito} // Pasa setCarrito como prop
          onAgregarAlCarrito={() => agregarAlCarrito(product)}
        />
      ))}
    </div>
  );
}

export default Album;
