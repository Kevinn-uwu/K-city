import React from 'react';
import './Inicio.css';
import { Link } from 'react-router-dom';
import gif from '../assets/gif.gif'

function Inicio() {
  return (
    <div className="inicio">
      <h1 className='Title'>K-City</h1>
      <div className="card">
      <img src={gif} alt="gif" loop style={{ width: '150px', height: '150px' }} className="product-image" />
      <p className='Card-text-secondary'>Explora nuestra selección de los mejores álbumes de kpop.</p>
      </div>
      <Link to="/ALbum">
      <button className='boton'>Ver Álbumes</button>
      </Link>
    </div>
  );
}

export default Inicio;
