import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav">
        <li>
        <Link to="/" className="link">Inicio</Link>
        </li>
        <li>
        <Link to="/Album" className="link">Album</Link>
        </li>
        <li>
        <Link to="/Carrito" className="link">Carrito</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
